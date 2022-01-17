import React from "react";
import {Button} from 'antd';
import {UserOutlined} from "@ant-design/icons";

const CascadUser = () => {

    return (

        <Button style={{marginLeft: '10px'}} size={'large'} type={'default'} shape={'circle'}>
            <UserOutlined/>
        </Button>


    );
}

export default CascadUser;