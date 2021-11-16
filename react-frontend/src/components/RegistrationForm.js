import React, {Component} from 'react';
import UserService from "../service/UserService";
import {DatePicker, Space} from 'antd';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button
} from 'antd';

function onChange(date, dateString) {
    console.log(date, dateString);
    //here
}

const {Option} = Select;


class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //id: this.props.match.params.id,
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            province: '',
            password: '',
            birthday: '',
            gender: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeProvinceHandler = this.changeProvinceHandler.bind(this);
        this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (event) => {
        event.preventDefault();

        let user = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            province: this.state.province,
            birthday: this.state.birthday,
            gender: this.state.gender
        };
        console.log('user => ' + JSON.stringify(user));

        UserService.createUser(user).then( response => {
            this.setState({
                post: response.data
            });
        });
    }


    //Assign the new values to user
    changeUserNameHandler = (event) => {
        this.setState({userName: event.target.value});
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value});
    }

    changeProvinceHandler = (event) => {
        this.setState({province: event.target.value});
    }

    changeBirthdayHandler = (event) => {
        onChange();
        this.setState({birthday: event.target.value});
    }

    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value});
    }


    render() {
        return (
            <>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
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
                        <Input placeholder="Email" name="email" className="form-control"
                               value={this.state.email} onChange={this.changeEmailHandler}/>
                    </Form.Item>

                    <Form.Item name="age"
                               label="Data Nasterii"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Introduceți data nașterii!',
                                   },
                               ]}>
                        <Space direction="vertical">
                            <DatePicker placeholder="Birthdate" name="birthday" className="form-control"
                                        value={this.state.birthday} onChange={this.onChange}/>
                        </Space>
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
                        hasFeedback
                    >
                        <Input.Password placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
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
                    >
                        <Input.Password placeholder="Confirm Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label="Nickname"
                        rules={[
                            {
                                required: true,
                                message: 'Introduceți nickname-ul!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="UserName" name="userName" className="form-control"
                               value={this.state.userName} onChange={this.changeUserNameHandler}/>
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
                    >
                        <Input placeholder="Last Name" name="lastName" className="form-control"
                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
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
                    >
                        <Input placeholder="First Name" name="firstName" className="form-control"
                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
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
                               placeholder="Phone" name="phone" className="form-control"
                               value={this.state.phone} onChange={this.changePhoneHandler}
                        />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Genul"
                        rules={[
                            {
                                required: true,
                                message: 'Selectați genul!',
                            },
                        ]}
                    >
                        <Select placeholder="selecteaza genul" >
                            <Option value="sexul puternimc">Masculin< /Option>
                            <Option value="sexul frumos">Feminin</Option>
                            <Option value="ambele">Altele</Option>
                            onClick={this.changeGenderHandler}
                        </Select>
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

                    >
                        <Checkbox>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            Sunt de acord cu <a href="">termenii și condițiile</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit"  onClick={this.saveUser}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </>
        );
    }
}

export default RegistrationForm;