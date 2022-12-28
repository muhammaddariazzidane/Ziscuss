import React, { useRef } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import BtnLogout from "./BtnLogout";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const signOut = () => {
    auth.signOut();
  };
  const warnUser = useRef();

  const logoutConfirm = () => {
    warnUser.current.classList.toggle("translate-x-full");
  };

  return (
    <>
      <div ref={warnUser} className="alert rounded-none alert-warning transition-all duration-300 w-full lg:w-[40%] lg:rounded-bl-lg h-32 top-0 translate-x-full right-0 shadow-xl fixed z-[99999]">
        <div>
          <span>Yakin rek kaluar???</span>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-primary text-white" onClick={logoutConfirm}>
            Gajadi
          </button>
          <button className="btn btn-sm btn-success text-white" onClick={signOut}>
            Ya
          </button>
        </div>
      </div>
      <div className="navbar bg-base-100 fixed top-0 z-[9999] right-0 lg:px-12 shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case lg:-ml-0 -ml-2 text-xl">{user ? user.displayName : ""}</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user ? user.photoURL : "https://placeimg.com/80/80/people"} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-b-lg rounded-tl-lg w-44">
              <BtnLogout logoutConfirm={logoutConfirm} warnUser={warnUser} signOut={signOut} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
