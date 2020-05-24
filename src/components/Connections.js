import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateCompoundUid } from '../utils';
import StartVideoChat from './StartVideoChat';
import { withRouter } from 'react-router-dom';
import { setCurrentChat } from '../store/chats';

const Connections = withRouter(function (props) {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChat = (compound) => {
    dispatch(setCurrentChat(compound));
    props.history.push('/chat');
  };

  return (
    <div>
      <h1>Connections</h1>
      {profile.matches ? (
        profile.matches.map((match) => {
          let compound = generateCompoundUid(user.uid, match.id);
          return (
            <div key={match.id} className="connection">
              <div className="connection-img-container">
                <img src="/default-user.jpg" />
              </div>
              <div className="connection-content">
                <h2>
                  {match.firstName} {match.lastName}
                </h2>
                <h3>{match.role}</h3>
              </div>
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
                  onClick={() => console.log('not working yet')}
                  id="meeting-button"
                >
                  Schedule a Meeting
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
});

export default Connections;
