import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { app } from "./Firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const createuser = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert(`you are signed up`);
      })
      .catch((error) => {
        if (error) {
          alert("You are already signed up");
        }
      });
    e.preventDefault();
  };

  const signupwithgoogle = (e) => {
    signInWithPopup(auth, googleProvider);
    e.preventDefault();
  };

  return (
    <>
      <div className="signuppage" style={{ marginBottom: "20px" }}>
        <form action="">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="enter your email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label htmlFor="">password</label>
          <input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <button className="signup-btn" onClick={createuser}>
            Sign up
          </button>
          <br />
          <button className="google-btn" onClick={signupwithgoogle}>
            Sign in with google
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
