import React from "react";
import { useForm } from "react-hook-form";

// Using react-hook-form https://react-hook-form.com/

export default function UserMandatoryForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);


  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="user-greeting">Create your .join() profile</h1>
      <label className="user-labels"></label>

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="City"
        name="City"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="State/Province"
        name="State/Province"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Country"
        name="Country"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Role"
        name="Role"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Programming Languages"
        name="Programming Languages"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Libraries/Frameworks"
        name="Libraries/Frameworks"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Company"
        name="Company"
        ref={register}
      />

      <label className="user-labels">Looking For Work?</label>
      <input
        className="form-inputs"
        type="checkbox"
        defaultChecked="checked"
        name="lookingForWork"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Hobbies/Interests"
        name="interests"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="About Me"
        name="aboutMe"
        ref={register}
      />

      <label className="user-labels">Profile Picture: </label>
      <input
        className="form-inputs"
        type="file"
        placeholder="Profile Picture"
        name="ProfilePicture"
        ref={register}
      />

      <input className="form-inputs" type="submit" />
    </form>
  );
}
