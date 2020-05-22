import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import { db } from ".."
import { fetchOrCreateProfile } from "../store/profile";

const CloudWidget = (props) => {

  let fbImage = db.storage().ref()
  const dispatch = useDispatch()
  const { user } = props;
  console.log(user.uid)
  const 

  // useEffect(() =>  {
  //   if(user.uid) {
  //     result = db.collection("users").doc(user.uid)
  //     await result.set(data, { merge: true })
  //   } else {
  //     console.log("Image Not found.")
  //   }

  // }, [])

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dplovxaof",
      uploadPreset: "dw5y6wg6",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info.url);
      }
    }
    
  );

  // const handleSubmit = async (data) => {
  //   try {
  //     let userRef = db.collection("users").doc(user.uid);
  //     await userRef.set(data, { merge: true});
  //     dispatchEvent(fetchOrCreateProfile(user))
  //   } catch(error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div id="photo-form-container">
      <button className="uploadWidget" onClick={() => myWidget.open() }>
        Upload Photo
      </button>
    </div>
  );
};

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(CloudWidget);