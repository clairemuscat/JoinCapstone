import React from 'react';

function MatchCard(props) {
  const { person } = props;
  return (
    <div className="match-card">
      <div id="card-image-container">
        <img src="/default-user.png" />
      </div>
      <h2>{person.random}</h2>
      <h3>
        {person.firstName} {person.lastName}
      </h3>
      <button>Connect</button>
      <button>Don't Connect</button>
    </div>
  );
}

export default MatchCard;
