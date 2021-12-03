import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import {Alert, Button, Checkbox, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {authenticateUser} from "../service";

// eslint-disable-next-line no-empty-pattern

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
            [event.target.name] : event.target.value
        });
    };

    validateUser = () => {
        this.props.authenticateUser(this.state.email, this.state.password);
        setTimeout(() =>{
           if(this.props.auth.isLoggedIn){
               return this.props.history.push("/home");
           }
           else{
               this.resetLoginForm();
               this.setState({"error":"Invalid email and password"});
           }
        }, 500);
    };

    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };

    render() {
        const {email, password, error} = this.state;
        return (
            <div>
                {/*{error && <Alert variant={"danger"} message={error}>{error}</Alert>}*/}
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                >
                    <Form.Item
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Please input your Email!'}
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               placeholder="Email"
                               value = {this.state.email}
                               onChange={this.credentialChange}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Please input your Password!'}
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                            value = {this.state.password}
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        Or <Link exact to={"/register"}><a href="">register now!</a></Link>

                        <Button
                            size="sm"
                            type="button"
                            variant="info"
                            onClick={this.resetLoginForm}
                        >
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        auth:state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return{
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
