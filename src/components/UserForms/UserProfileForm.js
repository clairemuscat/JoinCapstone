import React from 'react';
import { useForm } from 'react-hook-form';

export default function UserProfileForm() {
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

      <label>Email: </label>
      <input type="email" placeholder="Email" name="Email" ref={register} />

      <label>Gender: </label>
      <input type="text" placeholder="Gender" name="Gender" ref={register} />

      <input type="submit" />
    </form>
  );
}


// {
//   "users": {
//     "userId...": {
//       "firstName": "string",
//       "lastName": "string",
//       "email": "an email address",
//       "eventuallyLoginInfo": "meh?",
//       "city": "string",
//       "state/province": "not required",
//       "country": "country string",
//       "profile": {
//         "role": "string, e.g. front-end dev, product manager, designer, systems architecture specialist",
//         "programming_languages": "array of strings",
//         "libraries_frameworks": "array of strings",
//         "company": "string",
//         "looking_for_work": "boolean",
//         "hobbies_interests": "array of strings",
//         "about_me": "text"
//       }
//     }
//   }
// }