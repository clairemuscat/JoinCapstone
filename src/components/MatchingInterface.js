import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '..';
import { setToConnect } from '../store/toConnect';
import { randomEqualitySign, randomLimit, generateCompoundUid } from '../utils';
import { MatchCard } from '.';
import { fetchOrCreateProfile } from '../store/profile';

function MatchingInterface(props) {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const toConnect = useSelector((state) => state.toConnect);
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);

  const getRandos = async () => {
    const snap = await db
      .collection('users')
      .where('random', randomEqualitySign(), randomLimit())
      .orderBy('random')
      .limit(5)
      .get();
    const randos = [];
    snap.forEach((doc) => randos.push({ id: doc.id, ...doc.data() }));
    const filteredRandos = randos.filter(
      (rando) => !profile.users_seen[rando.id]
    );
    dispatch(setToConnect(filteredRandos));
  };

  useEffect(() => {
    if (profile.random) {
      getRandos();
    }
  }, [profile]);

  const updateCurrent = () => {
    if (current < toConnect.length - 1) {
      setCurrent(current + 1);
    } else {
      dispatch(fetchOrCreateProfile(user));
      setCurrent(0);
    }
  };

  const addToSeen = async (targetUid) => {
    try {
      const docRef = db.collection('users').doc(user.uid);
      const newUsersSeen = profile.users_seen;
      profile.users_seen[targetUid] = true;
      await docRef.set({ users_seen: newUsersSeen }, { merge: true });
    } catch (error) {
      console.error(error);
    }
  };

  const createMatchObject = (user, matchDate) => {
    return { ...user, matchDate };
  };

  const handleConnect = async (targetUser) => {
    try {
      addToSeen(targetUser.id);
      const compoundUid = generateCompoundUid(targetUser.id, user.uid);
      const matchRef = db.collection('connections').doc(compoundUid);
      const baseUserRef = db.collection('users').doc(user.uid);
      const targetUserRef = db.collection('users').doc(targetUser.id);
      const snap = await matchRef.get();
      if (snap.exists) {
        const connectionInfo = snap.data();
        if (connectionInfo[targetUser.id]) {
          const matchDate = new Date();
          const newBaseUserMatches = [
            ...user.matches,
            createMatchObject(targetUser, matchDate),
          ];
          await baseUserRef.set(
            { matches: newBaseUserMatches },
            { merge: true }
          );
          const newTargetUserMatches = [
            ...targetUser.matches,
            createMatchObject(user, matchDate),
          ];
          await targetUserRef.set(
            { matches: newTargetUserMatches },
            { merge: true }
          );
        }
        // redirect to matches
      } else {
        const connectionRef = db.collection('connections').doc(compoundUid);
        const connectionData = {
          [user.uid]: true,
        };
        await connectionRef.set(connectionData);
      }
      updateCurrent();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = (targetUid) => {
    // NEED TO ADD UPDATE PROFILE TO THIS SOMEWHERE!!!
    addToSeen(targetUid);
    updateCurrent();
  };

  return (
    <div>
      {toConnect.length ? (
        <MatchCard
          userB={toConnect[current]}
          handleConnect={handleConnect}
          handleReject={handleReject}
        />
      ) : (
        <div>No users to connect with</div>
      )}
    </div>
  );
}

export default MatchingInterface;
