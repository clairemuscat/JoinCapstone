import React from 'react';
import { useSelector } from 'react-redux';
import { generateCompoundUid } from '../utils';
import StartVideoChat from './StartVideoChat';
function Connections(props) {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Connections</h1>
      {profile.matches ? (
        profile.matches.map((match) => {
          let compound = generateCompoundUid(user.uid, match.id);
          return (
            <div key={match.id} className="connection">
              <div className="connection-content">
                <div className="connection-img-container">
                  <img src="/default-user.jpg" />
                </div>
                <h2>
                  {match.firstName} {match.lastName}
                </h2>
              </div>
              <div className="connection-controls">
                <StartVideoChat compoundUid={compound} />
                <button className="button" id="chat-button">
                  Chat
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Connections;
