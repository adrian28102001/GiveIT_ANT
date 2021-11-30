import React, { Component } from "react";
import axios from 'axios';

import { Card, Form, Button, Col, Input, Image } from "antd";

export default class Announcement extends Component {
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



    submitPost = (event) => {
        alert("title: " + this.state.title+ ", description: " + this.state.description+", category: " +this.state.category+", photo: "+this.state.photo)
        event.preventDefault();

        // axios.post("http://localhost:8080/posts", post)
        //     .then(response => {
        //         if (response.data != null){
        //             this.setState(this.initialState);
        //             alert("Post saved successfully");
        //
        //         }
        //     })
    };

    resetPost = () => {
        this.setState(() => this.initialState);
    }


    postChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { title, description, category, photo } = this.state;

        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Form
                        onReset={this.resetPost}
                        onSubmit={this.state.id ? this.updatePost : this.submitPost}
                        id="FormId"
                    >
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="test"
                                        name="title"
                                        value={title}
                                        onChange={this.postChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter Post Title"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="test"
                                        name="description"
                                        value={description}
                                        onChange={this.postChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter Post Description"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="test"
                                        name="category"
                                        value={category}
                                        onChange={this.postChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter Post Category"
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPhoto">
                                    <Form.Label>Photo</Form.Label>
                                    <Input>
                                        <Form.Control
                                            required
                                            autoComplete="off"
                                            type="test"
                                            name="Photo"
                                            value={photo}
                                            onChange={this.postChange}
                                            className={"bg-dark text-white"}
                                            placeholder="Enter Post Photo URL"
                                        />
                                        <Input.Append>
                                            {this.state.photo !== "" && (
                                                <Image
                                                    src={this.state.photo}
                                                    roundedRight
                                                    width="40"
                                                    height="38"
                                                />
                                            )}
                                        </Input.Append>
                                    </Input>
                                </Form.Group>

                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: "right" }}>
                            <Button size="sm" variant="success" type="submit">
                                {this.state.id ? "Update" : "Save"}
                            </Button>{" "}
                            <Button size="sm" variant="info" type="reset">
                            </Button>{" "}
                            {/*<Button*/}
                            {/*    size="sm"*/}
                            {/*    variant="info"*/}
                            {/*    type="button"*/}
                            {/*    onClick={() => this.AnnouncementList()}*/}
                            {/*>Announcement List*/}
                            {/*</Button>*/}
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );
    }
}
