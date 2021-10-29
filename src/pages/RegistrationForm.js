import React, { useState } from 'react';
import {
    Form,
    Input,
    Cascader,
    Select,
    Checkbox,
    Button,
} from 'antd';

import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
    console.log(date, dateString);
}

const { Option } = Select;
const residences = [
    {
        value: 'Chisinau',
        label: 'Chisinau',
    },
    {
        value: 'Cahul',
        label: 'Cahul',
    },
];


const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle >
            <Select
                style={{
                    width: 80,
                }}
            >
                <option>+373</option>
            </Select>
        </Form.Item>
    );

    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                prefix: '+373',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="age"
                        label="Birthday"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Birthday!',
                            },
                        ]}>
                <Space direction="vertical">
                    <DatePicker onChange={onChange} />
                </Space>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        min:5,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        min:5,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="residence"
                label="Habitual Residence"
                rules={[
                    {
                        type: 'array',
                        required: true,
                        message: 'Please select your habitual residence!',
                    },
                ]}
            >
                <Cascader options={residences} />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                        message: 'Please select gender!',
                    },
                ]}
            >
                <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
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
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;