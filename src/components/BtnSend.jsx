import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function BtnSend() {
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
  };
  return (
    <>
      <div className="max-w-[1080px] w-full fixed bottom-0">
        <form onSubmit={sendMessage}>
          <div className="form-control">
            <div className="input-group">
              <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type here" className="input  input-success focus:outline-none w-full" />
              <button className="btn btn-success text-white">
                <AiOutlineSend size={30} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
