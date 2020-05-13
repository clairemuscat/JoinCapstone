import React from "react";

// When you open page and click connect, it should populate with the user name and let you click on the room.

const ConnectPopUp = () => {
  return (
    <div className="bg-modal">
      <div className="modal-content">
        <h1>Simple PopUp</h1>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Room"></input>
        <a href="" className="button">
          Submit
        </a>
      </div>
    </div>
  );
};

export default ConnectPopUp;

// hit localhost, page has a pop-up, with name and asks if you want to connect. click connect, connect to room.
