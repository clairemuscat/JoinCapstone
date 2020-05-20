import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "..";
import { setMessage } from "../store/messages";

function Chat(props) {
  const user = useSelector((state) => state.user);
  const currentChat = useSelector((state) => state.currentChat);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const msg = [];
    let unsubscribe = db
      .collection("chats")
      .doc("compoundUID")
      .collection("messages")
      .onSnapshot((snap) => {
        snap.forEach((message) => msg.push(message.data()));
      });
    dispatch(setMessage(msg.sort((a, b) => (a.date < b.date ? 1 : -1))));
    return unsubscribe;
  }, []);
  console.log(messages);
  return (
    <div>
      <h1>CHAT</h1>
      {messages.length > 0 ? (
        messages.map((message) => {
          console.log(message);
          return <div>{message.content}</div>;
        })
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
}

export default Chat;

// What views will we have for chat?

// Will there be a chat section with all of your conversations, or will you have
// to navigate to a specific connection in order to chat with them?

// What should we store as subcollections vs. maps?

// How to access all chats from all matches?
// Map through matches array, get ids of each, make compound-uid
// query chat for any chats matching any of those compounds? oof lots of queries
