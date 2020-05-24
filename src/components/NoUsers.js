import React from 'react';

function NoUsers(props) {
  return (
    <div id="no-users">
      <div>Oh no! No more users to connect with</div>
      <button onClick={props.fetch}>Try Again</button>
    </div>
  );
}

export default NoUsers;
