import React from 'react';

import { Card } from 'antd';
import {HeartTwoTone, MessageTwoTone, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const { Meta } = Card;

const CardApp = ( {product} ) => (
    <Link to="details/${id}">
    <div className={'MyCard'}>
        <Card
            hoverable
            style={{ width: 240, margin:'10px' }}
            cover={
                <img
                    alt="example"
                    src={product.photo}/>
            }
            actions={[
                <HeartTwoTone  key="fav" twoToneColor="#eb2f96" />,
                <MessageTwoTone  key="mess" twoToneColor="#1890ff" />,
            ]}
        >

            <Meta
                title={product.title}
                avatar={<UserOutlined />}
                category={product.category}
            />
        </Card>
    </div>
    </Link>
);

export default CardApp;