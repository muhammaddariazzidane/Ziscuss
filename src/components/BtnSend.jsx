import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function BtnSend({ scroll }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      img: photoURL,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="max-w-[1080px] w-full pt-1 px-3 lg:pb-1 pb-1 lg:p-0 bg-white fixed bottom-0">
        <form onSubmit={sendMessage}>
          <div className="form-control">
            <div className="input-group">
              <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type here" className="input ring-1 ring-deep-purple-accent-400 focus:outline-none outline-none w-full" />
              <button className="btn bg-deep-purple-accent-400 text-white">
                <AiOutlineSend size={30} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
