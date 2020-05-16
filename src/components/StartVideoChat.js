import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Room from "./Room";

function StartVideoChat(props) {
  const [token, setToken] = useState(null);
  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);
  const user = useSelector((state) => state.user);

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("/video/token", {
        identity: user.displayName,
        room: "this will probably be the compound uid",
      });
      setToken(data.token);
    } catch (error) {
      console.log("Oops I did it again", error);
    }
  };

  let render;
  let roomName = "Compound Uid";
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <div>
        <button type="button" onClick={handleClick}>
          Start Video Call
        </button>
      </div>
    );
  }
  return render;
}

export default StartVideoChat;
