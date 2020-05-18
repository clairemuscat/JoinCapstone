import React from 'react';
import { MatchProfileDisplay } from '.';

function MatchCard(props) {
  const { userB, handleConnect, handleReject } = props;
  return (
    <div className="match-card">
      <MatchProfileDisplay userProfile={userB} />
      <button onClick={() => handleConnect(userB)}>Connect</button>
      <button onClick={() => handleReject(userB.id)}>Don't Connect</button>
    </div>
  );
}

export default MatchCard;
