import React from "react";

const Modal = () => {
  return (
    <div>
      <div className="bg-modal">
        <div className="modal-content">
        </div>

          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Room"></input>
          <a href="" className="button">
            Submit
          </a>
      </div>
    </div>
  );
};

export default Modal;