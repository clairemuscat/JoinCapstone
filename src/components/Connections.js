import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateCompoundUid } from '../utils';
import { withRouter } from 'react-router-dom';
import { setCurrentChat } from '../store/chats';
import { SingleConnection } from '.';

const Connections = withRouter(function (props) {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1 id="connections-header">Connections</h1>
      {profile.matches ? (
        profile.matches.map((match) => {
          let compound = generateCompoundUid(user.uid, match.id);
          return (
            <SingleConnection
              key={match.id}
              match={match}
              compound={compound}
            />
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
});

export default Connections;
