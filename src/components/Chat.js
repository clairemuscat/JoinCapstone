import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '..';

function Chat(props) {
  const user = useSelector((state) => state.user);
  db.collection('chats')
    .doc('example')
    .onSnapshot({ includeMetadataChanges: false }, (doc) =>
      console.log(doc.data())
    );
  return <div>Chat</div>;
}

export default Chat;

// What views will we have for chat?

// Will there be a chat section with all of your conversations, or will you have
// to navigate to a specific connection in order to chat with them?

// What should we store as subcollections vs. maps?

// How to access all chats from all matches?
// Map through matches array, get ids of each, make compound-uid
// query chat for any chats matching any of those compounds? oof lots of queries
