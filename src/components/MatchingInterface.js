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

  const handleSubmit = (value) => {
    // find or create document in "connections" collection
    // with id: compound user id. results map: keys are each user id (representing the base user) with value boolean. if document exists. it means other user has already pressed connect/don't connect with current user. in this case, add current user id and value passed to handle submit function. if results[useridA] && results[useridB] then send message to both
  };

  return (
    <div>{toConnect.length && <MatchCard person={toConnect[current]} />}</div>
  );
}

export default MatchingInterface;
