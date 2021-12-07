import React, {useEffect, useState} from "react";
import {Button, Col, Row, Image, Card, Form, Input, Space, DatePicker, Select, Checkbox} from 'antd';
import {Descriptions} from 'antd';
import {UserOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import axios from "axios";
import authToken from "../../utils/authToken";

function onChange(date, dateString) {
    console.log(date, dateString);
}

const { Option } = Select;


const ProfileCard = ({user}) => (
       <div></div>
)
export default ProfileCard;