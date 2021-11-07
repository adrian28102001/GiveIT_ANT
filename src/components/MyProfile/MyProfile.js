import MyProfileMenu from "../MyProfile/MyProfileMenu";
import React from "react";
import {Layout} from "antd";
import AboutClient from "./AboutClient";



const MyProfile = () => {
        return (
            <>
                <Layout>
            <div style={{ display:'flex', 'padding-left':'450px'}}>
                <MyProfileMenu/>
            </div>

                <Layout>

            <div>
                <AboutClient/>
            </div>
                </Layout>
                </Layout>
            </>

        );

}
export default  MyProfile;