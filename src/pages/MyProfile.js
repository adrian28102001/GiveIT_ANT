import React from "react";
import {Card, Space} from 'antd';
import AboutClient from "../components/AboutClient";
import Favorites from "../components/Favorites";
import BlockedUser from "../components/BlockedUser";

const tabList = [
    {
        key: 'MyProfile',
        tab: 'MyProfile',
    }
    ,
    {
        key: 'Favorites',
        tab: 'Favorites',
    },
    {
        key: 'Blocked_Users',
        tab: 'Blocked Users',
    },
];

const contentList = {
    MyProfile: <p><AboutClient/></p>,
    Favorites: <p><Favorites/></p>,
    Blocked_Users: <p><BlockedUser/></p>,
};

class TabsCard extends React.Component {
    state = {
        key: 'MyProfile',
        noTitleKey: 'app',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({[type]: key});
    };

    render() {
        return (
            <>
                    <Card
                        style={{width: '90%', 'margin-left':'50px'}}
                        tabList={tabList}
                        activeTabKey={this.state.key}
                        onTabChange={key => {
                            this.onTabChange(key, 'key');
                        }}
                    >
                        {contentList[this.state.key]}
                    </Card>
            </>
        );
    }
}

export default TabsCard;