import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import { CryptoDetails, Cryptocurrencies, Exchanges, HomePage, Navbar, New } from "./components";
import './App.css'
function App() {
  return (
    <div className="app">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="main">
      <Layout>
        <div className="routes">
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        

        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
       

        <Route exact path="/exchanges" element={<Exchanges/>} />
   

        <Route exact path="/news" element={<New/>} />
  
        <Route exact path="/crypto/:id" element={<CryptoDetails/>} />
    
        </Routes>
        </div>
      </Layout>
      <div className="footer">
    
      <Typography.Title level={5} style={{alignItems:'center',color:'white'}} >
        Cryptoverse <br/>
        All right reserved
      </Typography.Title>

        <Space>
          <NavLink to='/'>homepage</NavLink>
          <NavLink to='/exchanges'>Exchanges</NavLink>
          <NavLink to='/news'>news</NavLink>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
