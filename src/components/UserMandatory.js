import React from 'react';
import { useForm } from 'react-hook-form';

// Want to try out this react hook form.
// Entry page, followed by second page 
// which will have non-mandatory profile options

// how to upload pictures with react forms

export default function NewUserMandatory() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>First Name: </label>
      <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 20})} />

      <label>Last Name: </label>
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 20})} />

      <label>UserName: </label>
      <input type="text" placeholder="User Name" name="User Name" ref={register({required: true, maxLength: 15})} />

      <label>Profile Picture: </label>
      <input type="text" placeholder="Profile Picture" name="Profile Picture" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}