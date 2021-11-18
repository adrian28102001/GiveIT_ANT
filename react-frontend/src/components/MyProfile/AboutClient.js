import React from "react";
import {Button, Col, Row, Image, Card, Form, Input, Space, DatePicker, Select, Checkbox} from 'antd';
import {Descriptions} from 'antd';
import {UserOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";

function onChange(date, dateString) {
    console.log(date, dateString);
}

const { Option } = Select;


const AboutClient = () => {
    return (

        <div>

            <div className="site-card-border-less-wrapper">
                <Card title="MyProfile" bordered={false} >
                    <Row >
                        <Col span={5}>
                        <Avatar size={128} src="https://i.ibb.co/V3NQKqC/photo-2021-09-27-14-16-38.jpg" />
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
                                        <Input  disabled={true} />
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
                                            <DatePicker onChange={onChange} />
                                        </Space>
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
                                        <Input />
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
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        name="phone"
                                        label="Nr de telefon"
                                        rules={[
                                            {
                                                required: true,
                                                min:8,
                                                max:8,
                                                message: 'Introduceți numarul de telefon!',
                                            },
                                        ]}
                                    >

                                        <Input type={'number'}
                                               prefix="+373"
                                        />
                                    </Form.Item>



                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
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

export default AboutClient;