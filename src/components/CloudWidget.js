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