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
            <div key={match.id}>
              <h1>
                {match.firstName} {match.lastName}
              </h1>
              <StartVideoChat compoundUid={compound} />
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
