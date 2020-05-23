import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff } from "@material-ui/icons";
import { Fab, Tooltip } from "@material-ui/core";
import CallEnd from "@material-ui/icons/CallEnd";

const Participant = ({ participant, handleLogout }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [toggleState, setToggleState] = useState("off");

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  function toggleAudio() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return (
    <div className="participant">
      <h3>{participant.identity}</h3>
      <video ref={videoRef} autoPlay={true} />
      <audio
        id="aud"
        ref={audioRef}
        autoPlay={true}
        muted={toggleState === "on" ? false : true}
      />
      <Tooltip className="logoutButton" onClick={handleLogout} title="End Call">
        <Fab color="primary">
          <CallEnd />
        </Fab>
      </Tooltip>

      <Tooltip
        title="Toggle Audio"
        placement="top"
        className="audio-button-icon"
      >
        <Fab onClick={toggleAudio}>
          {toggleState === "on" ? <Mic /> : <MicOff />}
        </Fab>
      </Tooltip>
    </div>
  );
};

export default Participant;
