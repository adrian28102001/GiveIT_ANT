import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const CascadeApp = () => (


    <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Cascading menu <DownOutlined />
        </a>
    </Dropdown>
);

export default CascadeApp