import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
	const profile = useSelector((state) => state.profile);
	console.log("lemon", profile.hobbies_interests);

	return (
		<div id="user-profile">
			<div>
				<h1>
					{profile.firstName} {profile.lastName}
				</h1>
			</div>
			<div id="user-profile-img">
				<img src={profile.imageUrl} />
			</div>
			<br />
			<div>
				<p className="paragraph">{profile.about}</p>
			</div>
			<br />
			<div>
				{profile.city}, {profile.state_province}, {profile.country} |{" "}
				{profile.company} | {profile.role}{" "}
			</div>
			<br />
			<br />
			<div className="listed-items">
				<b>Programming Languages:</b>
				<br />
				<br />
				<ul>
					{profile.programming_languages.map((language) => {
						return <li>{language}</li>;
					})}
				</ul>
			</div>
			<br />
			<br />
			<div className="listed-items">
				<b>Hobbies and Interests:</b>
				<br />
				<br />
				<ul>
					{profile.hobbies_interests.map((hobby) => {
						return <li>{hobby}</li>;
					})}
				</ul>
			</div>
            <button type='button'>Edit Profile</button>
		</div>
	);
};

export default UserProfile;
