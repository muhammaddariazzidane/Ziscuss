import React from "react";
import { auth } from "../firebase";

export default function Message({ message }) {
  console.log(message);

  return (
    <>
      {message.uid === auth.currentUser.uid ? (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={message.img} />
            </div>
          </div>

          <div className="chat-bubble bg-deep-purple-accent-400 text-white">{message.text}</div>
          <div className="chat-footer text-xs opacity-70">{message.name}</div>
        </div>
      ) : (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={message.img} />
            </div>
          </div>
          <div className="chat-bubble bg-slate-400 text-white">{message.text}</div>
          <div className="chat-footer text-xs opacity-70">{message.name}</div>
        </div>
      )}
    </>
  );
}
