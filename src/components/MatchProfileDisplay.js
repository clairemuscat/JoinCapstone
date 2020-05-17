import React from 'react';

function MatchProfileDisplay(props) {
  const { userProfile } = props;
  return (
    <div className="match-profile-display">
      <div id="card-image-container">
        <img src="/default-user.png" />
      </div>
      <h2>
        Name: {userProfile.firstName} {userProfile.lastName}
      </h2>
      <h3>
        Location: {userProfile.city}, {userProfile.country}
      </h3>
      <div>Role: {userProfile.role}</div>
      <div>Programming Languages: {userProfile.programming_languages}</div>
      <div>Libraries/Frameworks: {userProfile.libraries_frameworks}</div>
      <div>Hobbies/Interests: {userProfile.hobbies_interests}</div>
      <div>About: {userProfile.about}</div>
      <div>{userProfile.looking_for_work && 'Looking for work!'}</div>
      <div>Company: {userProfile.company}</div>
    </div>
  );
}

export default MatchProfileDisplay;
