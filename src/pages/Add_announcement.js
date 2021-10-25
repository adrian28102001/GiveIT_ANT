import React from 'react';
import {Layout} from "antd";
import RadioButtonApp from "../components/RadioButton";
import DropdownApp from "../components/CascadeAddAnnouncement";


const Add_announcement = () => {
    return (
        <>
            <Layout>
                <div className={"TextFieldApp"}>
                    <DropdownApp/>
                </div>
                <div className={"RadioButton"}>
                    <h3>Tipul ofertei</h3>
                    <RadioButtonApp/>
                </div>
            </Layout>

        </>
    );
}
export default Add_announcement;