import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { db } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Chat(props) {
  const user = useSelector((state) => state.user);
  const currentChat = useSelector((state) => state.currentChat);
  const profile = useSelector((state) => state.profile);
  const [newMessage, setNewMessage] = useState('');
  const [values, loading, error] = useCollectionData(
    db.collection('chats').doc(currentChat).collection('messages')
  );

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    });
  };

  useEffect(() => {
    if (values && values.length > 0) {
      scrollToBottom();
    }
  }, [values]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = {
      date: new Date(),
      sentBy: user.uid,
      content: newMessage,
      name: profile.firstName,
    };

    await db
      .collection('chats')
      .doc(currentChat)
      .collection('messages')
      .add(message);
    setNewMessage('');
  };

  if (loading || error) return <div>Loading...</div>;

  return currentChat !== 'default' ? (
    <div>
      <div id="chat">
        <div id="chat-view">
          {values
            .sort((a, b) => (a.date < b.date ? -1 : 1))
            .map((value) => (
              <div
                key={value.date}
                className={
                  value.sentBy === user.uid
                    ? 'outgoing singleMessage'
                    : 'incoming singleMessage'
                }
              >
                <h5>{value.name}</h5>
                <div>{value.content}</div>
              </div>
            ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} id="chat-input">
          <input
            type="text"
            value={newMessage}
            placeholder="Write a message here"
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </form>
      </div>
    </div>
  ) : (
    <div>Go to your connections to find someone to chat with!</div>
  );
}

export default Chat;
