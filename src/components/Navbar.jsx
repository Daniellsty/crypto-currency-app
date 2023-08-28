import React, { useEffect, useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from  '../images/cryptocurrency.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {

  const [activeMenu,setActiveMenu] = useState(false)
  const [screenSize,setScreenSize] = useState(null)

  useEffect(() => {

    const handleResize=()=>setScreenSize(window.innerWidth)
    
    
    window.addEventListener('resize',handleResize)
    
    handleResize()

    return ()=> window.removeEventListener('resize',handleResize)

    
    
  }, []);

  useEffect(() => {

    if(screenSize > 768){

      setActiveMenu(true)
    }else{
      setActiveMenu(false)
    }


    
    
  }, [screenSize]);





  return (
    <div>
<div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size='large'  />
        <Typography.Title level={2} className="logo">
            <NavLink to="/">Cryptoverse</NavLink>
            </Typography.Title>
        <Button onClick={()=> setActiveMenu( prev=> !prev )} className="menu-control-container" ><MenuOutlined /></Button>
      </div>
     
    {activeMenu &&
    <Menu  theme="dark">
    <Menu.Item icon={<HomeOutlined />}>
      <NavLink to="/">Home</NavLink>
    </Menu.Item>
    <Menu.Item icon={<FundOutlined />}>
      <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
    </Menu.Item>
    <Menu.Item icon={<MoneyCollectOutlined />}>
      <NavLink to="/exchanges">Exchanges</NavLink>
    </Menu.Item>
    <Menu.Item icon={<BulbOutlined />}>
      <NavLink to="/news">News</NavLink>
    </Menu.Item>
  </Menu>  
  }

    </div>
    </div>
  )
}

export default Navbar