import React from "react";
import { auth } from "../firebase";

export default function Message({ message }) {
  return (
    <>
      {message.uid === auth.currentUser.uid ? (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={message.img} />
            </div>
          </div>

          <div className="chat-bubble">{message.text}</div>
        </div>
      ) : (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={message.img} />
            </div>
          </div>
          <div className="chat-bubble chat-bubble-secondary">{message.text}</div>
        </div>
      )}
    </>
  );
}
