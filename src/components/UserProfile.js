import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import UpdateProfile from "./UpdateProfile";
import { isPropsEqual } from "@fullcalendar/core";
import { withRouter } from "react-router-dom";
import { db } from "..";
import { connect, useDispatch } from 'react-redux';
import { deleteProfileThunk } from "../store/profile";

const UserProfile = withRouter(function (props) {
  const profile = useSelector((state) => state.profile);
  const { user } = props;
  const dispatch = useDispatch();
  let history = useHistory();
  // console.log("lemon", profile.hobbies_interests);
  // console.log(user.uid)

  const handleClick = () => {
    history.push("/updateProfile");
  };

  const handleDelete = async () => {
    try {
      window.confirm("This action will remove your profile.");
      if (confirm("Are you sure you want to delete your profile?")) {
        let docToDelete = db.collection("users").doc(user.uid);
		await docToDelete.delete();
		dispatch(deleteProfileThunk(user))
        window.alert("Profile Deleted.");
        history.push("/connect");
      } else {
        window.alert("Cancelled.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="user-profile">
      <div id="upper-user-div">
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
          <b>
            {profile.city}, {profile.state_province}, {profile.country} |{" "}
            {profile.company} | {profile.role}{" "}
          </b>
        </div>
      </div>
      <div id="user-profile-info">
        <div>
          <p className="paragraph">
            <b>About Me: </b>
            <br />
            {profile.about}
          </p>
        </div>
        <br />
        <br />
        <div className="listed-items">
          <b>Looking For Work?</b>
          <br />
          <br />
          <ul>
            {profile.looking_for_work
              ? "Yes"
              : "Just looking for new connections!"}
          </ul>
        </div>
        <br />
        <div className="listed-items">
          <b>Programming Languages:</b>
          <br />
          <br />
          <ul>{profile.programming_languages}</ul>
        </div>
        <br />
        <div className="listed-items">
          <b>Hobbies and Interests:</b>
          <br />
          <br />
          <ul>{profile.hobbies_interests}</ul>
        </div>

        <br />
        <button type="button" onClick={handleClick}>
          Edit Profile
        </button>
        <br />
        <button type="button" onClick={handleDelete}>
          Delete My Profile
        </button>
      </div>
    </div>
  );
});

const mapState = (state) => ({
	user: state.user,
  });

export default connect(mapState)(UserProfile);
