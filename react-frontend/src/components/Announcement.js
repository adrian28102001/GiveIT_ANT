import React, { Component } from "react";
import axios from 'axios';
import {Card, Form, Button, Col, Input, Image, Upload, Switch} from "antd";
import {registerUser, savePost} from "../service";
import {connect} from "react-redux";
import {UploadOutlined} from "@ant-design/icons";

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
        category: "",
        photo: ""
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
                        <Input rows={4} placeholder="Adauga descrierea" name="description" className="form-control"
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
                        <Input placeholder="Categorie"
                               name="category"
                               className="form-control"
                               value={this.state.category}
                               onChange={this.postChange}/>
                    </Form.Item>

                    <Form.Item

                        name="upload"
                        label="Adauga poza"
                        rules={[
                            {
                                required: true,
                                message: 'Incarca poza!',
                                whitespace: true,
                            },
                        ]}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Apasa pentru a incarca poza</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item label="Termeni&Conditii" valuePropName="checked">
                        <Switch />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary"
                                htmlType="submit"
                                onClick={this.submitPost}
                        >
                            Posteaza
                        </Button>
                    </Form.Item>

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
