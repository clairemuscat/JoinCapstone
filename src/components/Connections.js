import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateCompoundUid } from '../utils';
import { withRouter } from 'react-router-dom';
import { setCurrentChat } from '../store/chats';
import { SingleConnection } from '.';
import AddCalendarEvent from './AddCalendarEvent'
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
            <div key={match.id}>
              <h1>
                {match.firstName} {match.lastName}
              </h1>
              <div className='connection-meeting-options'>
              <StartVideoChat compoundUid={compound} />
              <AddCalendarEvent match={match} user={user}/>
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
