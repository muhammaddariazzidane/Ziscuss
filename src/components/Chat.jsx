import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
import { db } from "../firebase";
import Message from "./Message";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineSend } from "react-icons/ai";

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
      console.log(user.displayName, "ini chat");
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
      {messages.map((m) => {
        return (
          <>
            <div className="chat chat-start" key={m.id}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              {/* <div className="chat-header">
              {user.displayName}
              <time className="text-xs opacity-50">12:45</time>
            </div> */}
              <div className="chat-bubble chat-bubble-secondary">{m.text}</div>
              {/* <div className="chat-footer opacity-50">Delivered</div> */}
            </div>
            <div className="w-[1080px] fixed bottom-0">
              <div className="form-control">
                <div className="input-group">
                  <input type="text" placeholder="Type here" className="input  input-success focus:outline-none w-full" />
                  <button className="btn btn-success text-white">
                    <AiOutlineSend size={30} />
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}
      {/* {messages &&
        messages.map((message) => {
          <>
           
          </>;
        })} */}
    </>
  );
}
