import React from 'react';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

const CardApp = () => (
    <div className={'MyCard'}>
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://i.ibb.co/rpKt95x/photo-2021-10-08-17-00-37.jpg"
                />

            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
            />
        </Card>,
    </div>
);

export default CardApp;