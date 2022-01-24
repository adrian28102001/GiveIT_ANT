import React, { useState } from 'react';
import {
    Form,
    Button,
    TreeSelect,
    Switch,
    Upload,
    Input,
} from 'antd';

import {UploadOutlined} from "@ant-design/icons";
import {withRouter} from "react-router-dom";

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const FormCreatingAdd = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <h1 style={{'font-size':28,
                'margin-left':'40px',
                'padding':'30px'
            }}>
                Creeaza un anut</h1>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >

                <Form.Item label="Titlul anuntului">
                    <Input />
                </Form.Item>
                <Form.Item label="Categorie">
                    <TreeSelect
                        treeData={[
                            {
                                title: 'Mobila',
                                value: 'Mobila',
                                children: [
                                    {
                                        title: 'Scaun',
                                        value: 'scaun',
                                    },
                                    {
                                        title: 'Pat',
                                        value: 'Pat',
                                    },
                                    {
                                        title: 'Dulap',
                                        value: 'Dulap',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>


                <Form.Item label="Descriere produs">
                    <Input rows={4}/>
                </Form.Item>

                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Termeni&Conditii" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item label=" " colon={false}>
                    <Button type="primary" htmlType="submit" onSubmit={this.props.history.push("/MyProfile")}>
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
};

export default withRouter(FormCreatingAdd)