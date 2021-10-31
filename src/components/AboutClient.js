import React from "react";
import {Button, Image} from 'antd';
import {Descriptions} from 'antd';

const AboutClient = () => {
    return (

        <div>
            <Image
                width={200}
                src="https://i.ibb.co/V3NQKqC/photo-2021-09-27-14-16-38.jpg"
            />

            <div>
                <Descriptions title="User Info">
                <Descriptions.Item label="UserName">AdrianValentinaValeriaGeorge</Descriptions.Item>
                <Descriptions.Item label="Telephone">00000000</Descriptions.Item>
                <Descriptions.Item label="Live">str. Studentilor </Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
            </Descriptions>
                <Button type="primary">Edit profile data</Button>
            </div>
        </div>

    );
}

export default AboutClient;