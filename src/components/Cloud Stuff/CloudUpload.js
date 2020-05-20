// import React, { Component } from "react";
// // import cloudinary from "cloudinary"
// import { connect } from 'react-redux'
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

// // cloudinary.config({
// //   cloud_name: 'dh1ppbypq',
// //   api_key: '452681428295647',
// //   api_secret: 'PWKHH_13TQKvZPFtDwlBWf7QTQc'
// // })
// // router.post('/', (req, resp, next) => {
// //   try {
// //     cloudinary.v2.uploader.upload(req.body.url, function(error, result) {
// //       console.log(result, error)
// //       let payload = {
// //         image: result.url
// //       }

// class CloudUpload extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.user.uid)

//     this.checkUploadResult = this.checkUploadResult.bind(this)
//     this.showWidget = this.showWidget.bind(this)
//   }

//   checkUploadResult(resultEvent){
//     if (resultEvent.event === "success") {
//       console.log(this.props.user.uid);
//       this.props
//         .postPhoto({
//           user_id: this.props.user.uid,
//           caption: "",
//           url: resultEvent.info.secure_url,
//         })
//         .then(this.props.history.push(`/profile`));
//     }
//   };

//   showWidget(widget){
//     widget.open(null, {files: ["https://www.abc.net.au/cm/rimage/12172884-3x2-xlarge.jpg?v=4"]});
//   };
//   uploadWidget(cloudinarySettings, checkUploadResult) {
//     window.cloudinary
//     .openUploadWidget(cloudinarySettings, (err, res) => {
//       console.error(err)
//       this.checkUploadResult(res)
//     })

//   }

//   render() {
//     let widget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: "dplovxaof",
//         uploadPreset: "dw5y6wg6"
//       },
//       (error, result) => {
//         this.checkUploadResult(result);
//       }
//     );

//     return (
//       <div id="photo-form-container">
//         <button onClick={this.showWidget}>Upload Photo</button>
//       </div>
//     );
//   }
// }

// const mapState = (state) => ({
//   user: state.user,
// });

// export default connect(mapState)(CloudUpload)
