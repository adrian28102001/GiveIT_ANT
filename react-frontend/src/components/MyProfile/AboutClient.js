import React, {Component, useState} from "react";
import {Button, Col, Row, Card, Form, Input, Space, DatePicker, Select} from 'antd';
import Avatar from "antd/es/avatar/avatar";
import axios from "axios";


function onChange(date, dateString) {
    console.log(date, dateString);
}

const { Option } = Select;



class AboutClient extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            disabled: true
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/user/MyProfile"
        ).then((res) => {
            this.setState({user: res.data})
            console.log(res.data)
        }).catch((error) => {
            console.log(error.response)
        });
    }



    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled
        });
    };


    render() {


        console.log(localStorage.getItem("jwtToken"));
        return (

            <div>
                <div className="site-card-border-less-wrapper">
                    <Card title="MyProfile" bordered={false}>
                        <h1>hello {this.state.user.email}</h1>
                        {/* <h1> [[${this.#request.userPrinciple.principal.username}]]</h1>*/}
                        <Row>
                            <Col span={5}>
                                <Avatar size={128} src="https://i.ibb.co/V3NQKqC/photo-2021-09-27-14-16-38.jpg"/>
                            </Col>
                            <Col span={19}>
                                <Form
                                    labelCol={{
                                        span: 4,
                                    }}
                                    wrapperCol={{
                                        span: 10,
                                    }}
                                >

                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'Email-ul este invalid!',
                                            },
                                            {
                                                required: true,
                                                message: 'Introduceți Email-ul!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder={this.state.user.email} disabled={this.state.disabled}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="name"
                                        label="Prenume"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Introduceți prenumele!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input  placeholder={this.state.user.firstName} disabled={this.state.disabled}/>
                                    </Form.Item>



                                    <Form.Item
                                        name="surname"
                                        label="Nume"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Introduceți numele!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder={this.state.user.lastName} disabled={this.state.disabled}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="residence"
                                        label="Orasul"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Introduceți orașul',
                                            },
                                        ]}
                                    >
                                        <Input placeholder={this.state.user.province} disabled={this.state.disabled}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="phone"
                                        label="Nr de telefon"
                                        rules={[
                                            {
                                                required: true,
                                                min: 8,
                                                max: 8,
                                                message: 'Introduceți numarul de telefon!',
                                            },
                                        ]}
                                    >

                                        <Input type={'number'}
                                               prefix="+373"
                                               disabled={this.state.disabled}
                                               placeholder={this.state.user.phone}
                                        />
                                    </Form.Item>


                                    <Form.Item>
                                        <Button onClick={this.toggleDisabled} type="primary">
                                            Update
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>

        );
    }


}
export default AboutClient;