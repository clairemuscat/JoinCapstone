import React, { useState, useEffect } from "react";
import Video, { LocalVideoTrackPublication } from "twilio-video";
import { Participant } from ".";
import { Mic, MicOff } from "@material-ui/icons";
import { Fab, Tooltip } from "@material-ui/core";
import CallEnd from "@material-ui/icons/CallEnd";
import Videocam from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [toggleAudio, setToggleAudio] = useState("muted");
  const [toggleVideo, setToggleVideo] = useState("on");

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));
  //
  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };
    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };
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

  function muteOrUnmuteYourMedia(room, kind, action) {
    const publications =
      kind === "audio"
        ? room.localParticipant.audioTracks
        : room.localParticipant.videoTracks;
    publications.forEach(function (publication) {
      if (action === "mute") {
        publication.track.disable();
      } else {
        publication.track.enable();
      }
    });
  }

  function toggleYourAudio() {
    if (toggleAudio === "unmuted") {
      muteOrUnmuteYourMedia(room, "audio", "mute");
      setToggleAudio("muted");
    } else {
      muteOrUnmuteYourMedia(room, "audio", "unmute");
      setToggleAudio("unmuted");
    }
  }

  function toggleYourVideo() {
    if (toggleVideo === "on") {
      muteOrUnmuteYourMedia(room, "video", "mute");
      setToggleVideo("off");
    } else {
      muteOrUnmuteYourMedia(room, "video", "unmute");
      setToggleVideo("on");
    }
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
              <Fab onClick={toggleYourAudio} color="secondary">
                {toggleAudio === "unmuted" ? <Mic /> : <MicOff />}
              </Fab>
            </Tooltip>
            <Tooltip title={"Toggle Video"}>
              <Fab onClick={toggleYourVideo} color="secondary">
                {toggleVideo === "on" ? <Videocam /> : <VideocamOff />}
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
