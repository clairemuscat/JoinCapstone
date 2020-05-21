const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: "<my-cloud-name>",
  api_key: "<my-api-key>",
  api_secret: "<my-api-secret>",
});

fs.readdir(".", (err, files) => {
  files.forEach((fileName) => {
    cloudinary.v2.uploader.upload(
      fileName,
      { folder: "test4", resource_type: "auto" },
      (err, fileResponse) => {
        if (err) console.log(err);
        console.log(fileResponse);
      }
    );
  });
});
