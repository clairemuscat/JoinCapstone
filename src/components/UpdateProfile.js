import React from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { db } from "..";
// import { withRouter } from "react-router-dom";
import { fetchOrCreateProfile } from "../store/profile";

const UpdateProfile = (props) => {
  const { register, handleSubmit } = useForm();
  const { user, profile } = props;
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      let userRef = db.collection("users").doc(user.uid);
      await userRef.set(data, { merge: true });
      dispatch(fetchOrCreateProfile(user));
      props.history.push("/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="user-update" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="profile-greeting">Update your Profile</h1>
      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="firstName"
        defaultValue={profile.firstName}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="lastName"
        defaultValue={profile.lastName}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="country"
        defaultValue={profile.country}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="state_province"
        defaultValue={profile.state_province}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="city"
        defaultValue={profile.city}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="programming_languages"
        defaultValue={profile.programming_languages}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="libraries_frameworks"
        defaultValue={profile.libraries_frameworks}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="company"
        defaultValue={profile.company}
        ref={register}
      />

      <label className="update-labels">Looking For Work?</label>
      <input
        className="update-inputs"
        type="text"
        name="looking_for_work"
        defaultValue="yes"
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="hobbies_interests"
        defaultValue={profile.hobbies_interests}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="about"
        defaultValue={profile.about}
        ref={register}
      />

      <label className="update-labels"></label>
      <input
        className="update-inputs"
        type="text"
        name="imageUrl"
        defaultValue={profile.imageUrl}
        ref={register}
      />
      <input className="form-inputs" type="submit" />
    </form>
  );
};

const mapState = (state) => ({
  user: state.user,
  profile: state.profile
});

export default connect(mapState)(UpdateProfile);
