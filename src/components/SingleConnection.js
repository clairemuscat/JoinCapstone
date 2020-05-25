import React, { useState } from 'react';
import { Chat, StartVideoChat } from '.';
import AddCalendarEvent from './AddCalendarEvent'

function SingleConnection({ match, compound,user }) {
  const [displayChat, setDisplayChat] = useState(false);

  const handleChat = () => {
    setDisplayChat(!displayChat);
  };

  return (
    <div className="connection">
      <div className="connection-top-row">
        <div className="connection-img-container">
          <img
            src={
              match.imageUrl.length > 0 ? match.imageUrl : "default-user.jpg"
            }
          />
        </div>
        <div className="connection-content">
          <h2>
            {match.firstName} {match.lastName}
          </h2>
          <div className="connection-controls">
            <StartVideoChat compoundUid={compound} />
            <button
              className="button"
              onClick={() => handleChat(compound)}
              id="chat-button"
            >
              Chat
            </button>
            <AddCalendarEvent user={user} match={match}/>
          </div>
        </div>
      </div>
      {displayChat && <Chat chatId={compound} />}
    </div>
  );
}

export default SingleConnection;
