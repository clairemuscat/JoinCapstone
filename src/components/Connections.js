import React from 'react';
import { useSelector} from 'react-redux';
import { generateCompoundUid } from '../utils';
import { withRouter } from 'react-router-dom';
import { SingleConnection } from '.';
const Connections = withRouter(function (props) {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>Connections</h1>
      {profile.matches ? (
        profile.matches.map((match) => {
          let compound = generateCompoundUid(user.uid, match.id);
          return (
          
            <SingleConnection
              key={match.id}
              match={match}
              compound={compound}
            user={user}/>
           
    
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
});
export default Connections;