import React from 'react';
import { Button, Typography, Avatar, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined, MenuFoldOutlined} from '@ant-design/icons'


const Nav = () => {

  return (
<div className="nav-container">
      <div className="logo-container">
        <Typography.Title  level={2} className="logo"><Link to="/" className='logoT'>CrptoMaster</Link></Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cys">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )

}

export default Nav