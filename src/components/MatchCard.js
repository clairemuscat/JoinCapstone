import React from 'react';
import { MatchProfileDisplay } from '.';

function MatchCard(props) {
  const { userB, handleConnect, handleNotConnect } = props;
  return (
    <div className="match-card">
      <MatchProfileDisplay userProfile={userB} />
      <button onClick={() => handleConnect(userB.id)}>Connect</button>
      <button onClick={() => handleNotConnect(userB.id)}>Don't Connect</button>
    </div>
  );
}

export default MatchCard;
