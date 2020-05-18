import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";
import { db } from "..";
import { connect } from "react-redux";

// Using react-hook-form https://react-hook-form.com/

function UserMandatoryForm(props) {
  const { register, handleSubmit, setValue, errors } = useForm();
  const { profile, user } = props;
  // console.log(user);
  // console.log(profile);
  const onSubmit = async (data) => {
    let userRef = db.collection("users").doc(user.uid);
    console.log(data)
    let userSubmission = await userRef.set(data, { merge: true });
    
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="user-greeting">Create your .join() profile</h1>
      <label className="user-labels"></label>

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="City"
        name="city"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="State/Province"
        name="state_province"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Country"
        name="country"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Role"
        name="role"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Programming Languages"
        name="programming_languages"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Libraries/Frameworks"
        name="libraries_frameworks"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Company"
        name="company"
        ref={register}
      />

      <label className="user-labels">Looking For Work?</label>
      <input
        className="form-inputs"
        type="checkbox"
        defaultChecked="checked"
        name="looking_for_work"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Hobbies/Interests"
        name="hobbies_interests"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="About Me"
        name="about"
        ref={register}
      />

      <label className="user-labels">Profile Picture: </label>
      <input
        className="form-inputs"
        type="img"
        placeholder="Profile Picture"
        name="imageUrl"
        ref={register}
      />

      <input className="form-inputs" type="submit" />
    </form>
  );
}
const mapState = (state) => ({
  profile: state.profile,
  user: state.user,
});

export default connect(mapState)(UserMandatoryForm);