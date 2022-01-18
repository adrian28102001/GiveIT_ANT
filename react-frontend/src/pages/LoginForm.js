import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import {Button, Checkbox, Col, Form, Image, Input, Modal, Row} from 'antd';
import {Link, withRouter} from "react-router-dom";
import {authenticateUser} from "../service";
import logo from "../assets/logo2.png";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import  { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email: "",
        password: "",
        error: "",
        modalVisible: false
    };

    setModalVisible(modalVisible) {
        this.setState({modalVisible});
    }


    credentialChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validateUser = (props) => {
        let userObject = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.authenticateUser(userObject);
        setTimeout(() => {
            if (this.props.auth.isLoggedIn) {
                return this.setModalVisible(true)
            } else {
                this.resetLoginForm();
                this.setState({"error": "Invalid email and password"});
            }
        }, 500);
    };

     handleCancelModal = () => {
        console.log('Clicked cancel button');
        window.location.replace("/");
    };

    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };

    render() {
        return (
            <div>
                {/*{error && <Alert variant={"danger"} message={error}>{error}</Alert>}*/}
                <Modal
                    centered
                    onCancel = {this.handleCancelModal}
                    visible={this.state.modalVisible}
                    footer={[
                        <Row justify={"space-around"}>
                            <Link exact to={"/"}>
                                <Col>
                                    <Button> Pagina Principala </Button>
                                </Col>
                            </Link>,
                            <Link exact to={"/add_announcement"}>
                                <Col>
                                    <Button type={"primary"}> Creeaza un anunt </Button>
                                </Col>
                            </Link>
                        </Row>
                    ]}
                >
                    <>
                        <Row justify={"center"}>
                            <p>
                                <Image width={95} preview={false} style={{padding: '5px 5px'}}
                                       src={logo}/>
                            </p>
                        </Row>
                        <Row justify={"center"}>
                            <Title level={2}>Bine ai revenit!</Title>
                        </Row>
                        <Row justify={"center"}>
                            <Text type={"secondary"}>Alegeti unde vreti sa mergeti acum:</Text>
                        </Row>
                    </>
                </Modal>

                <Form
                >
                    <Form.Item
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Please input your Email!'
                        }
                        ]}
                        style={{width: 400}}
                    >
                        <Input
                            placeholder="Email"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.credentialChange}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Please input your Password!'
                        }
                        ]}
                    >
                        <Input.Password
                            name="password"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.credentialChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                onClick={this.validateUser}
                        >
                            Log in
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        Or <Link exact to={"/register"}><a href="">register now!</a></Link>
                    </Form.Item>


                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (userObject) => dispatch(authenticateUser(userObject))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
