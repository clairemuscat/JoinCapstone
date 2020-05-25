import React from "react";
import { MatchProfileDisplay } from ".";

function MatchCard(props) {
  const { userB, handleConnect, handleReject } = props;
  return (
    <div className="match-card">
      <MatchProfileDisplay userProfile={userB} />
      <div className="match-card-controls">
        <button
          className="button match-card-button"
          id="connect"
          onClick={() => handleConnect(userB)}
        >
          CONNECT
        </button>
        <button
          className="button match-card-button"
          id="skip"
          onClick={() => handleReject(userB.id)}
        >
          SKIP
        </button>
      </div>
    </div>
  );
}

export default MatchCard;
