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

// import React, { useState, useEffect, useReducer } from "react";
// import UserMandatoryForm from "./UserMandatoryForm";
// import { updateProfileEntry, fetchOrCreateProfile } from "../store/profile";
// import { connect } from "react-redux";
// import { generateNewProfile } from "../utils";
// import firebase from "firebase";
// import { db } from "..";

// const NewUser = (props) => {
//   const {
//     profile,
//     user
//   } = props;

//   const [userInput, setUserInput] = useReducer(
//     (state, newState) => ({...state, ...newState}),
//     {
//       city: '',
//       state_province: '',
//       country: '',
//       role: '',
//       languages: '',
//       work: '',
//       interests: '',
//       about: '',
//       imageUrl: ''
//     }
//   )

//   const handleChange = evt => {
//     const name = evt.target.name
//     const newValue = evt.target.newValue

//     setUserInput({[name]: newValue})
//   }
//   // const [city, setcity] = useState("");
//   // const [state_province, setstate_province] = useState("");
//   // const [country, setcountry] = useState("");
//   // const [role, setrole] = useState("");
//   // const [languages, setlanguages] = useState("");
//   // const [work, setwork] = useState(false);
//   // const [interests, setinterests] = useState("");
//   // const [about, setabout] = useState("");
//   // const [imageUrl, setimageUrl] = useState("");

//   return (
//     <UserMandatoryForm
//       handleChange={handleChange}
//       profile={profile}
//       userInput={setUserInput}
//     />
//   );
// };

// const mapState = (state) => ({
//   profile: state.profile,
//   user: state.user
// });

// const mapDispatch = (dispatch) => ({
//   setUser: (user) => dispatch(setUser(user)),
//   updateProfile: (user) => dispatch(updateProfileEntry(user))
// });

// export default connect(mapState, mapDispatch)(NewUser);
