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

  const handleConnect = (targetUid) => {
    addToSeen(targetUid);
  };

  const handleNotConnect = (targetUid) => {
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
          handleNotConnect={handleNotConnect}
        />
      )}
    </div>
  );
}

export default MatchingInterface;
