import React, { useState, useEffect, useReducer } from "react";
import UserMandatoryForm from "./UserMandatoryForm";
import { updateProfileEntry, fetchOrCreateProfile } from "../store/profile";
import { connect } from "react-redux";
import { generateNewProfile } from "../utils";
import firebase from "firebase";
import { db } from "..";


const NewUser = (props) => {
  const {
    profile,
    user
  } = props;

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      city: '',
      state_province: '',
      country: '',
      role: '',
      languages: '',
      work: '',
      interests: '',
      about: '',
      imageUrl: ''
    }
  )

  const handleChange = evt => {
    const name = evt.target.name
    const newValue = evt.target.newValue

    setUserInput({[name]: newValue})
  }
  // const [city, setcity] = useState("");
  // const [state_province, setstate_province] = useState("");
  // const [country, setcountry] = useState("");
  // const [role, setrole] = useState("");
  // const [languages, setlanguages] = useState("");
  // const [work, setwork] = useState(false);
  // const [interests, setinterests] = useState("");
  // const [about, setabout] = useState("");
  // const [imageUrl, setimageUrl] = useState("");

  return (
    <UserMandatoryForm
      handleChange={handleChange}
      profile={profile}
      userInput={setUserInput}
    />
  );
};

const mapState = (state) => ({
  profile: state.profile,
  user: state.user
});

const mapDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  updateProfile: (user) => dispatch(updateProfileEntry(user))
});

export default connect(mapState, mapDispatch)(NewUser);
