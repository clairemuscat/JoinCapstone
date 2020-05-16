import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '..';
import { setToConnect } from '../store/toConnect';
import { randomEqualitySign, randomLimit, generateCompoundUid } from '../utils';
import { MatchCard } from '.';

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
      .limit(20)
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
      setCurrent(0);
      getRandos();
    }
  };

  const addToSeen = async (targetUid) => {
    const docRef = db.collection('users').doc(user.uid);
    const newUsersSeen = profile.users_seen;
    profile.users_seen[targetUid] = true;
    await docRef.set({ users_seen: newUsersSeen }, { merge: true });
  };

  const handleConnect = (targetUser) => {
    console.log(targetUser, 'targetUser');
    console.log(targetUser.id, 'target user id');
    console.log(user.uid, 'user id');
    addToSeen(targetUser.id);
    const compoundUid = generateCompoundUid(targetUser.id, user.uid);
    console.log(compoundUid, 'compoundUid');
    const matchRef = db.collection('connections').doc(compoundUid);
    const baseUserRef = db.collection('users').doc(user.uid);
    const targetUserRef = db.collection('users').doc(targetUser.id);
    const snap = matchRef.get();
    if (snap.exists) {
      const connectionInfo = snap.data();
      if (connectionInfo[targetUser.id]) {
        const newBaseUserMatches = user.matches;
        newBaseUserMatches[targetUser.id] = targetUser;
        baseUserRef.set(newBaseUserMatches, { merge: true });
        newTargetUserMatches = targetUser.matches;
        newTargetUserMatches[user.uid] = profile;
        targetUserRef.set(newTargetUserMatches, { merge: true });
      }
    } else {
      const connectionRef = db.collection('connections').doc(compoundUid);
      const connectionData = {
        [user.uid]: true,
      };
      connectionRef.set(connectionData);
    }
  };

  const handleReject = (targetUid) => {
    // NEED TO ADD UPDATE PROFILE TO THIS SOMEWHERE!!!
    addToSeen(targetUid);
    updateCurrent();
  };

  return (
    <div>
      {toConnect.length && (
        <MatchCard
          userB={toConnect[current]}
          handleConnect={handleConnect}
          handleReject={handleReject}
        />
      )}
    </div>
  );
}

export default MatchingInterface;
