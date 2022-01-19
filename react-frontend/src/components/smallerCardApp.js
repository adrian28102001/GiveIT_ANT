import React from 'react';

import {Card, Col, Space} from 'antd';
import {HeartTwoTone, MessageTwoTone, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Meta} = Card;



const SmallerCardApp = ({product}) => {

    return (
        <div className={'MyCard'}>
            <Space align="center">
                <Col>
                    <Link exact to={`posts/${product.id}`}>
                        <Card
                            hoverable
                            style={{width: 180, margin: '10px'}}
                            cover={
                                <img
                                    alt="example"
                                    src={product.photo}/>
                            }
                            actions={[
                                <HeartTwoTone key="fav" twoToneColor="#eb2f96"/>,
                                <MessageTwoTone key="mess" twoToneColor="#1890ff"/>,
                            ]}
                        >

                            <Meta
                                title={product.title}
                                avatar={<UserOutlined/>}
                                category={product.category}
                            />
                        </Card>
                    </Link>
                </Col>
            </Space>
        </div>

    );
}

export default SmallerCardApp;