import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../Services/cryptoNewsApi";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment/moment";
import { useGetCryptoQuery } from "../Services/data";
import { Option } from "antd/es/mentions";

const New = ({ simplified }) => {
  const demoImage = "https://i.ibb.co/Z11pcGG/cryptocurrency.png";

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNew } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptoQuery(100);

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
            }>
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((item) => (
              <Option value={item.name}>{item.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNew?.value.map((item, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {item.name}
                </Typography.Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={item?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                />
              </div>
              <p>
                {item.description > 100
                  ? `${item.description.substring(0, 100)}....`
                  : item.description}
              </p>
            </a>
            <div className="provider-container">
              <div>
                <Avatar
                  src={
                    item.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  alt="news"
                />
                <Typography.Text className="provider-name">
                  {item.provider[0]?.name}
                </Typography.Text>
              </div>
              <Typography.Text>
                {moment(item.datePublished).startOf("ss").fromNow()}
              </Typography.Text>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default New;
