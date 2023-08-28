import parse from 'html-react-parser';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from "../Services/data";
import { useState } from 'react';
import { Option } from 'antd/es/mentions';
import LineChart from './LineChart';
import Loader from './Loader';

const CryptoDetails = () => {

  const { coinId } = useParams();
  const [timePeriod,setTimePeriod] = useState('7d')
  const { data } = useGetCryptoDetailQuery(coinId);
  const { data :coinHistory,isFetching } = useGetCryptoHistoryQuery({coinId,timePeriod});
  const cryptoDetails = data?.data?.coin;

  

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];


  if (isFetching) return <Loader/>;



  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Typography.Title level={2} className="coin-name">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) price
        </Typography.Title>
        <p>
          {cryptoDetails?.name} live price in us dollars
          view value statistics , market cap and supply
        </p>
      </Col>
      <Select defaultValue={timePeriod} className='select-timeperiod' placeholder="select Time period" 
      onChange={(value)=> setTimePeriod(value) }
      >
        {time.map((item)=> (<Option key={item}>{item}</Option>) )}
      </Select>
      <LineChart 
      coinHistory={coinHistory} 
      currentPrice={millify(cryptoDetails?.price)} 
      coinName={cryptoDetails?.name} 
      />
      <Col>
      <Col style={{margin:'20px 0'}} className='other-stats-info'>
      <Col className='coin-value-statistics-heading' >
        <Typography.Title level={3} className='coin-detailes-heading'>
        {cryptoDetails?.name} value statistics
        </Typography.Title>
        <p>
          an overview showing the stats of {cryptoDetails?.name}
        </p>
      </Col>
      {stats.map(({icon,title,value})=>(

        <Col className='coin-stats'>
         <Col className='coin-stats-name'>
         
         <Typography.Text>{icon}</Typography.Text>
         <Typography.Text>{title}</Typography.Text>
         </Col>
          <Typography.Text className='stats'>{value}</Typography.Text>
        </Col>

      ))}
      </Col>
      <Col style={{margin:'20px 0'}} className='other-stats-info'>
      <Col className='coin-value-statistics-heading' >
        <Typography.Title level={3} className='coin-detailes-heading'>
         other statistics
        </Typography.Title>
        <p>
          an overview showing the stats of all cryptocurrencies
        </p>
      </Col>
      {genericStats.map(({icon,title,value})=>(

        <Col className='coin-stats'>
         <Col className='coin-stats-name'>
         
         <Typography.Text>{icon}</Typography.Text>
         <Typography.Text>{title}</Typography.Text>
         </Col>
          <Typography.Text className='stats'>{value}</Typography.Text>
        </Col>

      ))}
      </Col>
      </Col>
      <Col className='coin-desc-link'>
        <Row className='coin-desc'>
        <Typography.Title level={3} className='coin-details-heading' >
          what is {cryptoDetails?.name}
         
        </Typography.Title>
        {HTMLReactParser(`<p> ${cryptoDetails?.description} </p>`)}
        </Row>
      <Col className='coin-links'>
      <Typography.Title level={3} className='coin-details-heading' >
        {cryptoDetails?.name}  links
      </Typography.Title>
      {cryptoDetails?.links.map((item)=>(
        <Row className='coin-link' key={item.name}>
          <Typography.Title className='link-name' style={{fontSize:'1rem'}} >
            {item.type}
          </Typography.Title>
          <a href={item.url} target='_blank' rel='' >
            {item.name}
          </a>
        </Row>
      ))}
      </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
