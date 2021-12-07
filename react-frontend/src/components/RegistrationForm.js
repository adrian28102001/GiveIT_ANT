import React, {Component} from 'react';
import UserService from "../service/UserService";
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button
} from 'antd';
import {registerUser} from "../service";
import {connect} from "react-redux";


class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        province: ''
    }

    userChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    registerUser = () => {
        let userObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            province: this.state.province
        };
        this.props.registerUser(userObject);
        this.resetRegistrationForm();
        setTimeout(() => {
            if (this.props.user.message != null){

            }else{

            }
        }, 2000);
    };

    resetRegistrationForm = () => {
        this.setState(() => this.initialState);
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
                        <Input placeholder="Email" name="email" className="form-control"
                               value={this.state.email} onChange={this.userChange}/>
                    </Form.Item>


                    <Form.Item
                        name="lastname"
                        label="Nume"
                        rules={[
                            {
                                required: true,
                                message: 'Introduceți numele!',
                                whitespace: true,
                            },
                        ]}
                        style={{width:500}}
                    >
                        <Input placeholder="Last Name" name="lastName" className="form-control"
                               value={this.state.lastName} onChange={this.userChange}/>
                    </Form.Item>


                    <Form.Item
                        name="firstname"
                        label="Prenume"
                        rules={[
                            {
                                required: true,
                                message: 'Introduceți prenumele!',
                                whitespace: true,
                            },
                        ]}
                        style={{width:500}}
                    >
                        <Input placeholder="First Name" name="firstName" className="form-control"
                               value={this.state.firstName} onChange={this.userChange}/>
                    </Form.Item>

                    <Form.Item
                        name="orasul"
                        label="orasul"
                        rules={[
                            {
                                message: 'Introduceți prenumele!',
                                whitespace: true,
                            },
                        ]}
                        style={{width:500}}
                    >
                        <Input placeholder="orasul" name="orasul" className="form-control"
                               value={this.state.province} onChange={this.userChange}/>
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
                        style={{width:500}}
                    >

                        <Input type={'number'}
                               prefix="+373"
                               placeholder="Phone" name="phone" className="form-control"
                               value={this.state.phone} onChange={this.userChange}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Parola"
                        rules={[
                            {
                                required: true,
                                min: 5,
                                message: 'Introducreți parola!',
                            },
                        ]}
                        style={{width:500}}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.userChange}/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirmă parola"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Confirmați parola!',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('Parola nu coincide!'));
                                },
                            }),
                        ]}
                        style={{width:500}}
                    >
                        <Input.Password placeholder="Confirm Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.userChange}/>
                    </Form.Item>


                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        style={{width:500}}
                    >
                        <Checkbox>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            Sunt de acord cu <a href="">termenii și condițiile</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit"  onClick={this.registerUser}>
                            Register
                        </Button>
                    </Form.Item>

                </Form>
            </>
        );
    };
}
const mapStateToProps = state => {
    return{
        user:state.user
    }
};

const mapDispatchToProps = dispatch => {
    return{
        registerUser: (userObject) => dispatch(registerUser(userObject))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
