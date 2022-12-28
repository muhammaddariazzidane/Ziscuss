import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import BtnLogin from "./BtnLogin";
import BtnLogout from "./BtnLogout";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 z-[9999] right-0 lg:px-12 shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{user ? user.displayName : ""}</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user ? user.photoURL : "https://placeimg.com/80/80/people"} />
              </div>
            </label>
            <ul tabIndex={0} className="-mt-0 mr-5 p-2 shadow-xl text-white menu menu-compact dropdown-content bg-indigo-600 rounded-tr-none rounded-b-full rounded-tl-full w-32">
              <BtnLogout />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
