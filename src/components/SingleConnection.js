import React, { useState } from "react";
import { Chat, StartVideoChat } from ".";

function SingleConnection({ match, compound }) {
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
            <button
              className="button"
              onClick={() => console.log("not working yet")}
              id="meeting-button"
            >
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
      {displayChat && <Chat chatId={compound} />}
    </div>
  );
}

export default SingleConnection;
