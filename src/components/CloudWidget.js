import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import axios from "axios";

// CLOUDINARY_URL = process.env.CLOUDINARY_URL

const CloudWidget = () => {
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dplovxaof",
      uploadPreset: "dw5y6wg6",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );
  return (
    <div id="photo-form-conatiner">
      <button className="uploadWidget" onClick={() => myWidget.open()}>
        Upload Photo
      </button>
    </div>
  );
};

export default CloudWidget;
