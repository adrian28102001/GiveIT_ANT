import React, { Component } from "react";

import { connect } from "react-redux";

import {
    Card,
    Table,
    Image,
} from "antd";

import { Link } from "react-router-dom";
import axios from "axios";

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/posts")
            .then((data) => {
                this.setState({posts: data});
            });
    }

    render() {
        return (
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <div style={{ float: "left" }}>
                           Book List
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Photo</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr align="center">
                                    <td colSpan="6">{this.state.posts.length}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
        );
    }
}

