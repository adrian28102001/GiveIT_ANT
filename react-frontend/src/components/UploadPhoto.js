import React, { useState } from 'react'
import {Button, Input, Upload} from "antd";
import * as url from "url";


const UploadPhoto = () => {

    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "giveit")
        data.append("cloud_name","dgwpw3bpf")
        fetch("  https://api.cloudinary.com/v1_1/dgwpw3bpf/image/upload",{
            method:"post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setPhoto(data.url)
                localStorage.setItem("photo_url", data.url)

            })
            .catch(err => console.log(err))


    }

    return (
        <div>
            <div>
                <Input name={"photo"} type="file" onChange= {(e)=> setImage(e.target.files[0])}></Input>
                <Button type={'primary'} onClick={uploadImage}>Upload</Button>
                <h1>Uploaded image will be displayed here</h1>
                <img src={photo}/>
            </div>
            <div>

            </div>
        </div>
    )
}
export default UploadPhoto ;