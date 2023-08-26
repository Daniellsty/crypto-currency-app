import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptoQuery } from './Services/data'
const HomePage = () => {

  const {data,isFetching} = useGetCryptoQuery()
  console.log(data);

  return (
   <>
   <Typography.Title level={2} className='heading'>
    Global Crypto State
   </Typography.Title>
   <Row>
   <Col span={12} ><Statistic title="Total Cryptocurrency" value='5'/></Col>
   <Col span={12} ><Statistic title="Total Exchanges" value='5'/></Col>
   <Col span={12} ><Statistic title="Total Market Cap" value='5'/></Col>
   <Col span={12} ><Statistic title="Total 24 volume" value='5'/></Col>
   <Col span={12} ><Statistic title="Total CryptoCurrencties" value='5'/></Col>
   </Row>
   </>
  )
}

export default HomePage