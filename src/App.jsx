import { useState } from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import BtnLogin from "./components/BtnLogin";

function App() {
  const style = {
    Container: `max-w-[1080px] text-center mx-auto`,
    Body: `flex flex-col h-auto mb-12 relative mt-20`,
  };
  const [user] = useAuthState(auth);
  console.log(user);
  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div className={style.Container}>
      {user ? (
        <>
          <Navbar />
          <div className={style.Body}>
            <Chat />
          </div>
        </>
      ) : (
        <div className="w-full bg-white">
          <div className="max-w-sm w-full -mt-12 mx-auto flex items-center h-screen">
            <div className="mx-auto">
              <img src="/logo.jpg" alt="/" />
              <BtnLogin />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
