import React from 'react';

import { Card, Avatar } from 'antd';
const { Meta } = Card;

const CardApp = ( {product}) => (
    <div className={'MyCard'}>
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={product.photo}
                />

            }
        >
            <Meta
                avatar={<Avatar src="" />}
                title={product.title}
                description={product.description}
                category={product.category}

            />
        </Card>
    </div>
);

export default CardApp;