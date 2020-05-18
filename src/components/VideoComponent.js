import React, { useState, useCallback } from "react";
import axios from "axios";
<<<<<<< HEAD
import { Lobby, Room, } from ".";
=======
import { Lobby } from ".";
>>>>>>> 8a8d2803e84df60efec50ace25659f9a053a6938

const VideoComponent = (props) => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      try {
        event.preventDefault();
        const { data } = await axios.post("/video/token", {
          identity: username,
          room: roomName,
        });

        setToken(data.token);
      } catch (error) {
        console.error(error);
      }
    },
    [username, roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = <div>test</div>;
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoComponent;
