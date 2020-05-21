import React from "react";
import { useSelector } from "react-redux";
import { generateCompoundUid } from "../utils";
import StartVideoChat from "./StartVideoChat";
import AddCalendarEvent from './AddCalendarEvent'
function Connections(props) {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);

  return (
    <div>
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
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Connections;
