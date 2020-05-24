import React from "react";
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile"
import { isPropsEqual } from "@fullcalendar/core";
import { withRouter } from "react-router-dom";

const UserProfile = withRouter(function(props) {
	const profile = useSelector((state) => state.profile);
	let history = useHistory();
	// console.log("lemon", profile.hobbies_interests);
	
	const handleClick = () => {
		history.push("/updateProfile")
	}

	const handleDelete = () => {
		history.delete("/profile")
	}

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
					{profile.programming_languages}
				</ul>
			</div>
			<br />
			<br />
			<div className="listed-items">
				<b>Hobbies and Interests:</b>
				<br />
				<br />
				<ul>
					{profile.hobbies_interests}
				</ul>
			</div>
			
	<button type='button' onClick={handleClick}>Edit Profile</button>
	<button type='button' onClick={handleDelete}>Delete Profile</button>
		</div>
	);
});

export default UserProfile;
