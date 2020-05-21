import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '..';
import { setMessage } from '../store/messages';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// msg.sort((a, b) => (a.date < b.date ? 1 : -1))

function Chat(props) {
  const user = useSelector((state) => state.user);
  const currentChat = useSelector((state) => state.currentChat);

  const [newMessage, setNewMessage] = useState('');

  const [values, loading, error] = useCollectionData(
    db.collection('chats').doc(currentChat).collection('messages')
  );

  if (loading || error) return <div>Loading...</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = {
      date: new Date(),
      sentBy: user.uid,
      content: newMessage,
    };

    await db
      .collection('chats')
      .doc(currentChat)
      .collection('messages')
      .add(message);

    setNewMessage('');
  };

  return currentChat !== 'default' ? (
    <div>
      <h1>CHAT</h1>
      <div id="messages">
        {values
          .sort((a, b) => (a.date < b.date ? -1 : 1))
          .map((value) => (
            <div>{value.content}</div>
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          New Message:
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  ) : (
    <div>Go to your connections to find someone to chat with!</div>
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
