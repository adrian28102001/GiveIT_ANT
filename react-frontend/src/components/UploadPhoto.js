import React, { useState } from 'react'
import {Button, Input, Row, message, Image} from "antd";


const UploadPhoto = () => {

    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");
    const [status, setStatus] = useState("");

    const handleState = () => {
        if(status === "success")
            message.success("All good!").then(r => message);
        else if (status === "error")
            message.error("Something is wrong").then(r => message);
        else
            message.warning('This is a warning message').then(r => message);
    }

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
                message.success("Imaginea a fost incarcata cu success!").then(r => message);
                localStorage.setItem("photo_url", data.url)

            })
            .catch((err) => {
                console.log(err)
                message.error("Ups, ceva a mers nu cum trebuie").then(r => message);
            })

    }

    return (
        <div>

            <Row>
                <Input name={"photo"} type="file" onChange= {(e)=> setImage(e.target.files[0])}></Input>
            </Row>
            <Row justify={"center"} style={{padding:"3%"}}>
                <Button type={'primary'} onClick={uploadImage}>Incarca imaginea</Button>
            </Row>
            <Row>
                <h1>Imaginea incarcata va apre aici</h1>
                <Image width={100} src={photo}/>
            </Row>

            <div>

            </div>
        </div>
    )
}
export default UploadPhoto ;