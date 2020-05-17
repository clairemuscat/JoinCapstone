import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase";

export const Profile = (props) => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("users"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  console.log("value ", value);
  console.log("loading ", loading);
  console.log("error ", error);
  return (
    <div>
      <p>
        {" "}
        {value && (
          <span>
            {value.docs.map((doc) => {
              let data = doc.data();
              console.log(data.firstName, "data");
              return (
                <React.Fragment key={doc.id}>
                  <h1>{data.city}</h1>
                </React.Fragment>
              );
            })}
          </span>
        )}
      </p>
    </div>
  );
};

export default Profile;
