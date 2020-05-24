import React from "react";
import Room from "./room";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="inner-popup">
          <Room />
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;
