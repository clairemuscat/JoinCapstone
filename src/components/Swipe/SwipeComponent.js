// import React from "react";
// import TinderCard from "react-tinder-card";

// const SwipeComponent = () => {
//   const onSwipe = (direction) => {
//     console.log("You swiped: " + direction);
//   };

//   const onCardLeftScreen = (myIdentifier) => {
//     console.log(myIdentifier + " left the screen");
//   };

//   return (
//     <TinderCard
//       onSwipe={onSwipe}
//       onCardLeftScreen={() => onCardLeftScreen("fooBar")}
//       preventSwipe={["right", "left"]}
//     >
//       Hello, World!
//     </TinderCard>
//   );
// };

// // ...

// export default SwipeComponent;

import React, { useState } from 'react'
import './Swipe.css'
import TinderCard from './TinderCardMath'

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
]

function SwipeComponent () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default SwipeComponent
