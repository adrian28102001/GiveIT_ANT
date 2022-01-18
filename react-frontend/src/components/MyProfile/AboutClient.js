import React, {Component, useState} from "react";
import {Button, Col, Row, Card, Form, Input, Space, DatePicker, Select} from 'antd';
import Avatar from "antd/es/avatar/avatar";
import axios from "axios";
import UserService from "../../service/UserService";
import {withRouter} from "react-router-dom";


function onChange(date, dateString) {
    console.log(date, dateString);
}

const { Option } = Select;



class AboutClient extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            province: '',
            disabled: true,
            showButton: false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/user/MyProfile"
        ).then((res) => {
            let user = res.data;
            this.setState({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                phone: user.phone,
                province: user.province
            })
            console.log('user => ' + JSON.stringify(user))
        }).catch((error) => {
            console.log(error.response)
        });
    }

    updateUser = (event) => {
        event.preventDefault();

        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            province: this.state.province
        };
        console.log('user => ' + JSON.stringify(user));

        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/MyProfile');
        });
    }

    //Assign the new values to user
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }

    changeProvinceHandler= (event) => {
        this.setState({province: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
            showButton: !this.state.showButton
        });
    };




    render() {

        const displayButton = (
<Row >
            <Form.Item style={{marginRight:"50%"}}>
                <Button type="primary">
                    Anuleaza
                </Button>
            </Form.Item>

        <Form.Item >
            <Button onClick={this.updateUser} htmlType={"submit"} type="primary">
                Actualizeaza
            </Button>
        </Form.Item>
</Row>

        );

        const dontDisplayButton = (
            <Form.Item>
                <Button onClick={this.toggleDisabled} type="primary">
                    Actualizati Profilul
                </Button>
            </Form.Item>

        );


        console.log(localStorage.getItem("jwtToken"));
        return (

            <div>
                <div className="site-card-border-less-wrapper">
                    <Card title="MyProfile" bordered={false}>
                        <h1>hello {this.state.email}</h1>
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
                                        <Input value={this.state.email} placeholder={this.state.email} disabled={this.state.disabled}/>
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
                                        <Input value={this.state.firstName} placeholder={this.state.firstName} onChange={this.changeFirstNameHandler}/>
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
                                        <Input value={this.state.lastName} placeholder={this.state.lastName} onChange={this.changeLastNameHandler}/>
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
                                        <Input value={this.state.province} placeholder={this.state.province} onChange={this.changeProvinceHandler}/>
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
                                               value={this.state.phone}
                                               placeholder={this.state.phone}
                                               onChange={this.changePhoneHandler}
                                        />
                                    </Form.Item>


                                    {this.state.showButton ? displayButton : dontDisplayButton }

                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>

        );
    }


}
export default withRouter(AboutClient);