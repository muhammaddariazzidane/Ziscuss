import { useState } from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

function App() {
  const style = {
    Container: `max-w-[1080px] text-center mx-auto`,
    Body: `flex flex-col h-auto relative mt-20`,
  };
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.Container}>
      <Navbar />
      {user ? (
        <div className={style.Body}>
          <Chat />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
