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
        placeholder="User Name"
        name="userName"
        ref={register({ required: true, maxLength: 15 })}
      />
      {errors.userName && errors.userName.type === "required" && (
        <p className="required"> This is required </p>
      )}

      <label className="user-labels">Profile Picture: </label>
      <input
        className="form-inputs"
        type="file"
        placeholder="Profile Picture"
        name="profilePicture"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Job Title"
        name="Title"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Interests"
        name="Interests"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Location"
        name="Location"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="text"
        placeholder="Technologies"
        name="Technologies"
        ref={register}
      />

      <label className="user-labels"></label>
      <input
        className="form-inputs"
        type="email"
        placeholder="Email"
        name="Email"
        ref={register}
      />

      <label className="user-labels">Gender: </label>
      <select className="form-inputs" name="Gender" ref={register}>
        <option>
          Select...
        </option>
        <option>
          Male
        </option>
        <option>
          Female
        </option>
      </select>

      <input className="form-inputs" type="submit" />
    </form>
  );
}
