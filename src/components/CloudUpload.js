import React, { Component } from "react";

export default class CloudUpload extends Component {
  constructor(props) {
    super(props);
  }

  checkUploadResult = (resultEvent) => {
    if (result.event === "success") {
      console.log(this.props.currentUser.id);
      this.props
        .postPhoto({
          user_id: this.props.currentUser.id,
          caption: "",
          url: resultEvent.info.secure_url,
        })
        .then(this.props.history.push(`/profile`));
    }
  };

  showWidget = (widget) => {
    widget.open(null, {files: ["https://www.abc.net.au/cm/rimage/12172884-3x2-xlarge.jpg?v=4"]});
  };

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dplovxaof",
        uploadPreset: "r4ne2sqw",
      },
      (error, result) => {
        this.checkUploadResult(result);
      }
    );

    return (
      <div id="photo-form-container">
        <button onClick={this.showWidget}>Upload Photo</button>
      </div>
    );
  }
}
