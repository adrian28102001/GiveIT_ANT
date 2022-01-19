import React, {Component} from "react";
import {Button, Col, Row, Card, Form, Input, Select, Modal, Image} from 'antd';
import Avatar from "antd/es/avatar/avatar";
import axios from "axios";
import UserService from "../../service/UserService";
import {Link, withRouter} from "react-router-dom";
import logo from "../../assets/logo2.png";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";



const {  } = Select;



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
            showButton: false,
            modalVisible: false
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
        this.setModalVisible(true);
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

    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
            showButton: !this.state.showButton
        });
    };

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

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
                <Modal
                    centered
                    visible={this.state.modalVisible}
                    footer={[
                        <Link exact to = {"/"}>
                            <Button > Pagina Principala </Button>
                        </Link>
                    ]}
                >
                    <Row justify={"center"}>
                        <p>
                            <Image width={95} preview={false} style={{padding: '5px 5px'}}
                                   src={logo}/>
                        </p>
                    </Row>
                    <Row justify={"center"}>
                        <Title level={2} >Profilul a fost creat cu succes!</Title>
                    </Row>
                    <Row justify={"center"}>
                        <Title level={4} > Bine ati venit!</Title>
                    </Row>
                    <Row justify={"center"}>
                        <Text type={"secondary"} >Alegeti unde vreti sa mergeti acum:</Text>
                    </Row>
                </Modal>


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