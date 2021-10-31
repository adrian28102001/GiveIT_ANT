import React, { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button
} from 'antd';

import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
    console.log(date, dateString);
}

const { Option } = Select;



const RegistrationForm = () => {

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
                <Input />
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
                name="password"
                label="Parola"
                rules={[
                    {
                        required: true,
                        min:5,
                        message: 'Introducreți parola!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
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
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('Parola nu coincide!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
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
                <Select placeholder="selecteaza genul">
                    <Option value="masculin">Masculin</Option>
                    <Option value="feminin">Feminin</Option>
                    <Option value="altele">Altele</Option>
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
                   Sunt de acord cu <a href="">termenii și condițiile</a>
                </Checkbox>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
        </>
    );
};

export default RegistrationForm;