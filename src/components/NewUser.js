import React, { useState, useEffect, useReducer } from "react";
import UserMandatoryForm from "./UserMandatoryForm";
import { updateProfileEntry } from "../store/profile";
import { connect } from "react-redux";
import { generateNewProfile } from "../utils";
import firebase from "firebase";
import { db } from "..";
import MatchProfileDisplay from "./MatchProfileDisplay";

const NewUser = (props) => {
  const {
    profile
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

  const handleSubmit = (event) => {
    event.preventDefault()
    
  };

  return (
    <UserMandatoryForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      profile={profile}
      userInput={setUserInput}
    />
  );
};

const mapState = (state) => ({
  profile: state.profile,
});

const mapDispatch = (dispatch) => ({
  updateProfile: (user) => dispatch(updateProfileEntry(user))
});

export default connect(mapState, mapDispatch)(NewUser);
