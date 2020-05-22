import React, { Component } from "react";
import { connect } from 'react-redux'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import axios from "axios"

CLOUDINARY_URL = process.env.CLOUDINARY_URL

// const userImg =
// let imgPreview = document.getElementById('img-preview');
// var fileUpload = document.getElementById('file-upload');

// fileUpload.addEventListener('change', function(event) {
//     console.log(event)
// })

// handleSubmit(image){
//     let userImg = db.collection("users").doc(user.uid)
// }

// render

// <div className="match-profile-display">
//       <div id="card-image-container">
//         <img src="/default-user.png" />

//         <img src={this.state.img} ref={img => this.img = img} onError={
//     () => this.img.src = 'img/default.img'
// }></img>


export const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
            <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={preview} /> }
        </div>
    )
}