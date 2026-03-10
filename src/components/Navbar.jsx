import React, { useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined } from '@ant-design/icons'; 
import icon from '../images/cryptocurrency.png';
import './Navbar.css'

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className="nav-container"> 

      <div className='logo-container'> 
        <Avatar src={icon} size="large"/>

        <Typography.Title level={2} className='logo'>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu theme="dark" className="menu">
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}

    </div>
  )
}

export default Navbar