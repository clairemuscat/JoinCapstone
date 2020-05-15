import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '..';
import { setToConnect } from '../store/toConnect';
import { randomEqualitySign, randomLimit } from '../utils';
import { MatchCard } from '.';

function MatchingInterface(props) {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const toConnect = useSelector((state) => state.toConnect);

  const getRandos = async () => {
    const snap = await db
      .collection('users')
      .where('random', randomEqualitySign(), randomLimit())
      .orderBy('random')
      .limit(5)
      .get();
    const randos = [];
    snap.forEach((doc) => randos.push({ [doc.id]: doc.data() }));
    return randos;
  };

  useEffect(() => {
    const getRandos = async () => {
      const snap = await db
        .collection('users')
        .where('random', randomEqualitySign(), randomLimit())
        .orderBy('random')
        .limit(5)
        .get();
      const randos = [];
      snap.forEach((doc) => randos.push({ id: doc.id, ...doc.data() }));
      dispatch(setToConnect(randos));
    };
    getRandos();
  }, []);

  return (
    <div>{toConnect.length && <MatchCard person={toConnect[current]} />}</div>
  );
}

export default MatchingInterface;
