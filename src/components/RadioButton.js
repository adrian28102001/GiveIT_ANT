import React from "react";
import {Radio} from 'antd';

const RadioButtonApp = () => {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (

        <Radio.Group onChange={onChange} value={value}>

            <Radio value={1} >Ofer</Radio>
            <Radio value={2}>Caut</Radio>
        </Radio.Group>
    );
}

export default RadioButtonApp;