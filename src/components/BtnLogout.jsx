// import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

export default function BtnLogout() {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <>
      <li>
        <a onClick={() => auth.signOut()}>Logout</a>
      </li>
    </>
  );
}
