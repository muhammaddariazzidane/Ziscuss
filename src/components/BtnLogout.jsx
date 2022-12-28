// import { signOut } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../firebase";

export default function BtnLogout({ logoutConfirm, warnUser, signOut }) {
  // const signOut = () => {
  //   auth.signOut();
  // };

  return (
    <>
      {/* <div ref={warnUser} className="fixed top-0 flex items-center justify-between w-full max-w-5xl h-32 px-2 sm:px-4 translate-x-96 bg-gray-900 transition-all duration-500 z-30">
        <p className="w-full text-sm sm:text-base lg:text-lg text-gray-200">apakah anda yakin ingin meninggalkan room chat?</p>
        <div className="space-x-1 sm:space-x-2 w-full flex justify-end">
          <button onClick={signOut}>
            <span className="py-64 bg-lime-400">Ya</span>
          </button>
          <button onClick={logoutConfirm}>
            <span className="py-64 bg-lime-400">tidak</span>
          </button>
        </div>
      </div> */}
      <li>
        <a onClick={logoutConfirm}>Logout</a>
      </li>
    </>
  );
}
