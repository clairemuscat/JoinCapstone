import React from 'react';
import { useForm } from 'react-hook-form';

export default function NewUserExtra() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label></label>
      <input type="text" placeholder="Title" name="Title" ref={register} />

      <label></label>
      <input type="text" placeholder="Interests" name="Interests" ref={register} />

      <label></label>
      <input type="text" placeholder="Location" name="Location" ref={register} />

      <label></label>
      <input type="text" placeholder="Technologies" name="Technologies" ref={register} />

      <label></label>
      <input type="text" placeholder="Gender" name="Gender" ref={register} />

      <input type="submit" />
    </form>
  );
}