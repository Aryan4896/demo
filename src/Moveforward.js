import React from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase";
import { useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Reactcontact from "./Reactcontact";
import { useState } from "react";
import { Icon } from "@iconify/react";

const auth = getAuth(app);

const Moveforward = () => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        //user is logged out
        setuser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="final-form">
        <Signup />
        <Signin />
      </div>
    );
  }
  return (
    <>
      <Reactcontact />
      <p className="signout-btn" onClick={() => signOut(auth)}>
        <Icon icon="bx:log-out-circle" width="78" height="150" />
      </p>
    </>
  );
};

export default Moveforward;
