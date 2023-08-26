import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import millify from "millify";
import { useGetCryptoQuery } from './Services/data'
import { NavLink } from 'react-router-dom';
import New from './New';
import Cryptocurrencies from './Cryptocurrencies';
const HomePage = () => {

  const {data,isFetching} = useGetCryptoQuery(10)
 

  const dataCoins = data?.data?.stats

  return (
   <>
   <Typography.Title level={2} className='heading'>
    Global Crypto State
   </Typography.Title>
   <Row>
   <Col span={12} ><Statistic title="Total Cryptocurrency" value={dataCoins?.total}/></Col>
   <Col span={12} ><Statistic title="Total Exchanges" value={dataCoins?.totalExchanges}/></Col>
   <Col span={12} ><Statistic title="Total Market Cap" value={millify(dataCoins?.totalMarketCap)}/></Col>
   <Col span={12} ><Statistic title="Total 24 volume" value={millify(dataCoins?.total24hVolume)}/></Col>
   <Col span={12} ><Statistic title="Total CryptoCurrencties" value={millify(dataCoins?.totalMarkets)}/></Col>
   </Row>
   <div className='home-heading-container'>
    <Typography.Title level={2} className='home-title' >
      top 10 cryptocurrencies in the world
    </Typography.Title>
    <Typography.Title level={3} className='show-more'>
     <NavLink to='/cryptocurrencies'>show more</NavLink>
    </Typography.Title>
   </div>
   <Cryptocurrencies simplified={true}/>

   <div className='home-heading-container'>
    <Typography.Title level={2} className='home-title' >
      Latest crypto news
    </Typography.Title>
    <Typography.Title level={3} className='show-more'>
     <NavLink to='/news'>show more</NavLink>
    </Typography.Title>
   </div>
   <New simplified={true}/>
   </>
  )
}

export default HomePage