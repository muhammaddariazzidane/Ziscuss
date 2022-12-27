import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

export default function BtnLogin() {
  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <>
      <li>
        <a onClick={GoogleSignIn}>Login</a>
      </li>
    </>
  );
}
