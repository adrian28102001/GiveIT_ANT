import React from 'react';
import 'antd/dist/antd.css';
import {Drawer, Form, Button, Col, Row, Input, Select, Space,Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
const {Option} = Select;


class DrawerForm extends React.Component {
    state = {visible: false};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    render() {
        return (
            <>
                <Button type="primary" onClick={this.showDrawer}>
                    Log In
                </Button>
                <Drawer
                    title="Log In"
                    width={300}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{paddingBottom: 80}}

                >
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{required: true, message: 'Please input your Email!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your Password!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Drawer>
            </>

        );
    }

}

export default DrawerForm;
