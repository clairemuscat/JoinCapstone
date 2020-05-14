import emptyProfile from '../emptyProfile';

export function generateNewProfile(user) {
  const nameArray = user.displayName.split(' ');
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length - 1];
  return {
    ...emptyProfile,
    firstName,
    lastName,
    email: user.email,
  };
}
