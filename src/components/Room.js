import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import { Participant } from ".";
import { Mic, MicOff } from "@material-ui/icons";
import { Fab, Tooltip } from "@material-ui/core";
import CallEnd from "@material-ui/icons/CallEnd";
import Videocam from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [toggleState, setToggleState] = useState("off");

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));
  //
  useEffect(() => {
    // Adds a participant to state
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };
    // Removes a participant from state
    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };
    // Connects local video/audio
    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
    });
    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  function toggleAudio() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
  return (
    <div className="room">
      <div className="local-participant">
        {room ? (
          <>
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              handleLogout={handleLogout}
            />
            <Tooltip
              className="logoutButton"
              onClick={handleLogout}
              title="End Call"
            >
              <Fab color="secondary">
                <CallEnd />
              </Fab>
            </Tooltip>
            <Tooltip title="Toggle Audio" className="audio-button-icon">
              <Fab onClick={toggleAudio} color="secondary">
                {toggleState === "on" ? <Mic /> : <MicOff />}
              </Fab>
            </Tooltip>
            <Tooltip title={"Toggle Video"}>
              <Fab color="secondary">
                <Videocam />
              </Fab>
            </Tooltip>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
  );
};

export default Room;
