import React, {Component, useState} from "react";
import axios from 'axios';
import {Form, Button, Input, Upload, Switch, Select} from "antd";
import {savePost} from "../service";
import {connect} from "react-redux";
import {UploadOutlined} from "@ant-design/icons";
import {Option} from "antd/es/mentions";
import UploadPhoto from "./UploadPhoto";

const normFile = (e: any) => {

    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};


class Announcement extends Component {


    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.postChange = this.postChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    initialState = {
        id: "",
        description: "",
        category: "Mobila si interior",
        photo: "",
    };


    resetPost = () => {
        this.setState(() => this.initialState);
    }

    submitPost = event => {
        event.preventDefault();

        const post = {
            title:  this.state.title,
            description:  this.state.description,
            category: this.state.category,
            photo: this.state.photo
        }
        axios.post("http://localhost:8080/posts/add-post", post)
            .then(response => {
                if (response.data != null){
                    this.setState(this.initialState);
                    alert("Post saved successfully");
                }
            } )
    };

    postChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleChange= e =>{
    this.setState({category:e});
}


    render() {
        return (
            <>
                <Form
                    labelCol={{
                        span: 10,
                    }}
                    wrapperCol={{
                        span: 17,
                    }}
                    style={{width:500}}
                    // onSubmit={this.submitPost}
                    onSubmitCapture={this.submitPost}
                >
                    <Form.Item
                        name="title"
                        label="Titlu"
                        rules={[
                            {
                                required: true,
                                message: 'Introduceți titlu!',
                                whitespace: true,
                            },
                        ]}
                        style={{width:500}}
                    >
                        <Input placeholder="Adauga Titlu" name="title" className="form-control"
                               value={this.state.title} onChange={this.postChange}/>
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="Descriere"
                        rules={[
                            {
                                required: true,
                                message: 'Adauga descrierea',
                                whitespace: true,
                            },
                        ]}
                        style={{width:500}}
                    >
                        <Input.TextArea rows={5} placeholder="Adauga descrierea" name="description"  className="form-control"
                               value={this.state.description} onChange={this.postChange}/>
                    </Form.Item>

                <Form.Item
                    name="category"
                    label="Categorie"
                    rules={[
                        {
                            required: true,
                            message: 'Adauga Categoria',
                            whitespace: true,
                        },
                    ]}
                    style={{width:500}}
                >
                    <Select
                        placeholder="Alege categoria"
                        name = "category"
                        value={this.state.category} onChange={this.handleChange}>
                        <Option value="Mobila si interior">Mobila si interior</Option>
                        <Option value="Haine, incaltaminte, accesorii">Haine, incaltaminte, accesorii</Option>
                        <Option value="Gadget-uri">Gadget-uri</Option>
                        <Option value="Sport, sanatate, frumusete">Sport, sanatate, frumusete</Option>
                        <Option value="Totul pentru copii">Totul pentru copii</Option>
                        <Option value="Animale de companie">Animale de companie</Option>
                        <Option value="Plante">Plante</Option>
                        <Option value="Carti, manuale">Carti, manuale</Option>
                        <Option value="Totul pentru casa">Totul pentru casa</Option>
                        <Option value="Instrumente muzicale">Instrumente muzicale</Option>
                        <Option value="Instrumente, constructie">Instrumente, constructie</Option>


                    </Select >
                </Form.Item>

                    <Form.Item
                        name="photo"
                        label="Adauga poza"
                        rules={[
                            {
                                required: true,
                                message: 'Incarca poza!',
                                whitespace: true,
                            },
                        ]}>
                        <UploadPhoto/>

                    </Form.Item>

                    <Form.Item label="Termeni&Conditii" valuePropName="checked"
                               rules={[
                                   {
                                       required: true,
                                   },
                               ]}>
                        <Switch />
                    </Form.Item>

                        <Button type="submit"
                                 htmlType="submit"
                                >
                       Submit </Button>

                    {/*</Form.Item>*/}

                </Form>
            </>
        );
    }
}
const mapStateToProps = state => {
    return{
        postObject:state.post
    }
};

const mapDispatchToProps = dispatch => {
    return{
        savePost: (postObject) => dispatch(savePost(postObject))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcement);
