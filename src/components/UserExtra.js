import React from 'react';
import { useForm } from 'react-hook-form';

export default function NewUserExtra() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Title: </label>
      <input type="text" placeholder="Title" name="Title" ref={register} />

      <label>Interests: </label>
      <input type="text" placeholder="Interests" name="Interests" ref={register} />

      <label>Location: </label>
      <input type="text" placeholder="Location" name="Location" ref={register} />

      <label>Technologies: </label>
      <input type="text" placeholder="Technologies" name="Technologies" ref={register} />

      <label>Gender: </label>
      <input type="text" placeholder="Gender" name="Gender" ref={register} />

      <input type="submit" />
    </form>
  );
}