import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
import { db } from "../firebase";
import Message from "./Message";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineSend } from "react-icons/ai";
import BtnSend from "./BtnSend";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      // console.log(user.displayName, "ini chat");
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      {/* {messages.map((mes) => {
        return (
          <>
            <div key={mes.id}>
              <p className="py-96 bg-red-600 w-full text-6xl font-bold">{mes.text}</p>
            </div>
          </>
        );
      })} */}
      {messages &&
        messages.map((message) => {
          return (
            <>
              <Message key={message.id} message={message} />
              <BtnSend />
              {/* <div className="chat chat-start" key={m.id}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
             
              <div className="chat-bubble chat-bubble-secondary">{m.text}</div>
            </div> */}
            </>
          );
        })}
    </>
  );
}
