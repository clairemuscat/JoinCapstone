import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '..';
import { generateCompoundSlice } from '../utils';

function Chat(props) {
  const user = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  // console.log(db.collection('chats').doc().id);
  // console.log(
  //   generateCompoundSlice(
  //     'vLNoNsSou4Sn8bihqgDjYWeJPAq2_UkE4Xxh3wwQPWAWICu1dU28mH9q2'
  //   )
  // );
  db.collection('chats')
    .doc('vLNoNsSou4Sn8bihqgDjYWeJPAq2_UkE4Xxh3wwQPWAWICu1dU28mH9q2')
    .collection('messages')
    .onSnapshot((snap) => {
      const msg = [];
      snap.forEach((message) => msg.push(message.data()));
      setMessages(msg);
    });

  console.log(messages);
  return <div>{messages.map((message) => console.log(message.content))}</div>;
}

export default Chat;

// What views will we have for chat?

// Will there be a chat section with all of your conversations, or will you have
// to navigate to a specific connection in order to chat with them?

// What should we store as subcollections vs. maps?

// How to access all chats from all matches?
// Map through matches array, get ids of each, make compound-uid
// query chat for any chats matching any of those compounds? oof lots of queries
