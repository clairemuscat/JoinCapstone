import emptyProfile from '../emptyProfile';
import seedProfile from '../seedProfile';

export function generateNewProfile(user) {
  const random = Math.random() * 2 ** 50;
  return {
    ...emptyProfile,
    email: user.email,
    random,
    users_seen: { [user.uid]: true },
    matches: [],
  };
}

export function generateSeedProfile(user) {
  const nameArray = user.displayName.split(' ');
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length - 1];
  const random = Math.random() * 2 ** 50;
  return {
    ...seedProfile,
    firstName,
    lastName,
    email: user.email,
    random,
    users_seen: { [user.uid]: true },
    matches: [],
  };
}

export function generateCompoundUid(uid1, uid2) {
  return uid1 > uid2 ? `${uid1}_${uid2}` : `${uid2}_${uid1}`;
}

export function generateCompoundSlice(compoundUid) {
  return `${compoundUid.slice(0, 5)}${compoundUid.slice(-5)}`;
}

export function randomEqualitySign() {
  return Math.round(Math.random()) ? '>=' : '<=';
}

export function randomLimit() {
  return Math.random() * 2 ** 50;
}
