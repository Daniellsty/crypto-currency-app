import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from './Services/cryptoNewsApi'
import { Avatar, Card, Col, Row, Typography  } from 'antd';
import moment from 'moment/moment';

const New = ({simplified}) => {

  const demoImage = 'https://i.ibb.co/Z11pcGG/cryptocurrency.png'

  const {data} = useGetCryptoNewsQuery({newsCategory:"Cryptocurrency",count:simplified ? 6 : 12})
  console.log(data);
  return (
   <Row gutter={[24,24]} >
    {data?.value.map((item,i)=>(

      <Col xs={24} sm={12} lg={8} key={i} >
      
      <Card hoverable className='news-card'>
        <a href={item.url} target='_blank' rel="noreferrer" >
          <div className='news-image-container'>
            <Typography.Title className='news-title' level={4} >
              {item.name}
            </Typography.Title>
            <img style={{maxWidth:'200px',maxHeight:'100px'}} src={item?.image?.thumbnail?.contentUrl || demoImage } alt="" />
          </div>
          <p>{item.description > 100 ? `${item.description.substring(0,100)}....`
          :item.description
          }</p>
        </a>
        <div className='provider-container'>
          <div>
          <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt='news' />
           <Typography.Text className='provider-name' >{item.provider[0]?.name}</Typography.Text>
          </div>
          <Typography.Text >{moment(item.datePublished).startOf('ss').fromNow() }</Typography.Text>
         
        </div>
      </Card>
      </Col>
    ))}
   </Row>
  )
}

export default New