import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { app } from "./Firebase";

const auth = getAuth(app);
const firestore = getFirestore(app);

let date = new Date();
let timeconvertor = `${date.getHours()}:${date.getMinutes()}`;

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signinuser = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("successfully signed in");
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  const writedata = async () => {
    const result = addDoc(collection(firestore, "loginhistory"), {
      Email: email,
      logintime: timeconvertor
    });
    console.log(result);
  };

  return (
    <>
      <div className="signinpage">
        <form action="">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="enter your email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <div onClick={writedata}>
            <button className="signin-btn" onClick={signinuser}>
              sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
