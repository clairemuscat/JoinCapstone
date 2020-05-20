import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { db } from "..";
// Using react-hook-form https://react-hook-form.com/
function UserMandatoryForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const { user } = props;
  const onSubmit = async (data) => {
    let userRef = db.collection("users").doc(user.uid);
    console.log(data);
    let userSubmission = await userRef.set(data, { merge: true });
  };
  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="user-greeting">Create your .join() profile</h1>
      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="First Name"
        name="firstName"
        ref={register({ required: true, maxLength: 20 })}
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <p className="required"> This is required </p>
      )}
      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Last Name"
        name="lastName"
        ref={register({ required: true, maxLength: 20 })}
      />
      {errors.lastName && errors.lastName.type === "required" && (
        <p className="required"> This is required </p>
      )}
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
        placeholder="State/Province"
        name="state_province"
        ref={register}
      />
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
      <label className="user-labels">Profile Picture</label>
      <input
        className="form-inputs"
        type="text"
        name="imageUrl"
        ref={register}
      />
      <input className="form-inputs" type="submit" />
    </form>
  );
}
const mapState = (state) => ({
  user: state.user,
});
export default connect(mapState)(UserMandatoryForm);