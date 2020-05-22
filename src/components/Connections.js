import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateCompoundUid } from "../utils";
import StartVideoChat from "./StartVideoChat";
import { withRouter } from "react-router-dom";
import { setCurrentChat } from "../store/chats";

const Connections = withRouter(function (props) {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChat = (compound) => {
    dispatch(setCurrentChat(compound));
    props.history.push("/chat");
  };

  return (
    <div>
      {profile.matches ? (
        profile.matches.map((match) => {
          let compound = generateCompoundUid(user.uid, match.id);
          return (
            <div key={match.id}>
              <h1>
                {match.firstName} {match.lastName}
              </h1>
              <StartVideoChat compoundUid={compound} />
              <button type="button" onClick={() => handleChat(compound)}>
                Message
              </button>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
});

export default Connections;
