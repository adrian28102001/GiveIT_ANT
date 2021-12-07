import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import {Alert, Button, Checkbox, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {authenticateUser} from "../service";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email: "", password: "", error: ""
    };


    credentialChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validateUser = () => {
        let userObject = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.authenticateUser(userObject);
        setTimeout(() => {
            if (this.props.auth.isLoggedIn) {
                //return this.props.history.push("/add_announcement");
            } else {
                this.resetLoginForm();
                this.setState({"error": "Invalid email and password"});
            }
        }, 500);
    };

    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };

    render() {
        return (
            <div>
                {/*{error && <Alert variant={"danger"} message={error}>{error}</Alert>}*/}
                <Form
                >
                    <Form.Item
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Please input your Email!'
                        }
                        ]}
                        style={{width:400}}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
