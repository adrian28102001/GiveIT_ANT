import React from "react";
import {Button, Image} from 'antd';
import {Descriptions} from 'antd';

const BlockedUser = () => {
    return (

        <div>
            <Image
                width={200}
                src="https://i.ibb.co/Yfh2DBX/blocked-user.png"
            />
            <div>
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
                <Button type="Unblock user">Unblock user</Button>
            </div>
        </div>

    );
}

export default BlockedUser;