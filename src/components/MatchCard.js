import React from 'react';

function MatchCard(props) {
  const { userB, handleConnect, handleNotConnect } = props;
  return (
    <div className="match-card">
      <div id="card-image-container">
        <img src="/default-user.png" />
      </div>
      <h2>{userB.random}</h2>
      <h3>
        {userB.firstName} {userB.lastName}
      </h3>
      <button onClick={() => handleConnect(userB.id)}>Connect</button>
      <button onClick={() => handleNotConnect(userB.id)}>Don't Connect</button>
    </div>
  );
}

export default MatchCard;
