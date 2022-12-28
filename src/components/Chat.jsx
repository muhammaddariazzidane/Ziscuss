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
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      {messages &&
        messages.map((message) => {
          return (
            <>
              <Message key={message.id} message={message} />
              <BtnSend scroll={scroll} />
              <span ref={scroll}></span>
            </>
          );
        })}
    </>
  );
}
