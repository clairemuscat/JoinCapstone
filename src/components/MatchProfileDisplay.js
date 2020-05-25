import React from 'react';

function MatchProfileDisplay(props) {
  const { userProfile } = props;
  return (
    <div className="match-profile-display">
      <div id="card-image-container">
        <img
          src={
            userProfile.imageUrl.length > 0
              ? userProfile.imageUrl
              : 'default-user.jpg'
          }
        />
      </div>
      <div className="match-card-header">
        <h2>
          {userProfile.firstName} {userProfile.lastName}
        </h2>
      </div>
      <div className="match-card-content">
        <div>Role: {userProfile.role}</div>
        <div>Programming Languages: {userProfile.programming_languages}</div>
        <div>Libraries/Frameworks: {userProfile.libraries_frameworks}</div>
        <div>Hobbies/Interests: {userProfile.hobbies_interests}</div>
        <div>About: {userProfile.about}</div>
        <div>{userProfile.looking_for_work && 'Looking for work!'}</div>
        <div>Company: {userProfile.company}</div>
      </div>
    </div>
  );
}

export default MatchProfileDisplay;
