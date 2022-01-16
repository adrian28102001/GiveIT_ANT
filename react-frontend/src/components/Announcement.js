import React, {Component} from "react";
import axios from 'axios';
import {Form, Button, Input, Switch, Select, Modal, Image, Row, Checkbox} from "antd";
import {savePost} from "../service";
import {connect} from "react-redux";
import {Option} from "antd/es/mentions";
import UploadPhoto from "./UploadPhoto";
import logo from "../assets/logo2.png";
import Title from "antd/es/typography/Title";
import {Link} from "react-router-dom";

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
        modalVisible: false,
        id: "",
        description: "",
        category: "Mobila si interior",
        photo: "",
    };

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }


    resetPost = () => {
        this.setState(() => this.initialState);
    }

    submitPost = event => {
        event.preventDefault();

        const post = {
            title:  this.state.title,
            description:  this.state.description,
            category: this.state.category,
            photo: localStorage.getItem("photo_url"),
        }
        axios.post("http://localhost:8080/posts/add-post", post)
            .then(() => { this.setState(this.initialState)})
            .then(() => this.setModalVisible(true))
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
                <Modal
                    centered
                    visible={this.state.modalVisible}
                    footer={[
                        <Link exact to = {"/"}>
                        <Button> Ok </Button>
                        </Link>
                    ]}
                >
                    <Row justify={"center"}>
                    <p>
                        <Image width={95} preview={false} style={{padding: '5px 5px'}}
                              src={logo}/>
                    </p>
                    </Row>
                    <Row justify={"center"}>
                    <Title level={2} >Anuntul a fost postat cu succes!</Title>
                    </Row>
                </Modal>

                <Form
                    labelCol={{
                        span: 10,
                    }}
                    wrapperCol={{
                        span: 17,
                    }}
                    style={{width:500}}

                    onSubmitCapture={this.submitPost}
                >
                    <Form.Item
                        name="title"
                        label="Titlu"
                        rules={[
                            {
                                min: 3,
                                max:30,
                                required: true,
                                message: 'Introduceți un titlu mai mare de 3 caractere!',
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
                                min:10,
                                required: true,
                                message: 'Adauga o descriere fiabila! (mai mult de 10 caractere)',
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

                        <Button type="submit"
                                 htmlType="submit"
                                >
                       Posteaza anuntul </Button>

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
