import emptyProfile from '../emptyProfile';

export function generateNewProfile(user) {
  const nameArray = user.displayName.split(' ');
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length - 1];
  const random = Math.random() * 2 ** 50;
  return {
    ...emptyProfile,
    firstName,
    lastName,
    email: user.email,
    random,
  };
}

export function generateCompoundUid(uid1, uid2) {
  return uid1 > uid2 ? `${uid1}_${uid2}` : `${uid2}_${uid1}`;
}