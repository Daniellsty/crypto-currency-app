import { Card, Col, Row, Statistic, Typography } from "antd";
import React, { useEffect, useState } from "react";
import millify from "millify";
import { NavLink } from "react-router-dom";
import Input from "antd/es/input/Input";
import { useGetCryptoQuery } from "../Services/data";
import Loader from "./Loader";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptoQuery(count);
  const [crypto, setCrypto] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = data?.data?.coins.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setCrypto(filtered);
  }, [searchTerm, data]);

  if (isFetching) return <Loader/>;

  return (
    <div>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto &&
          crypto.map((item) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.uuid}>
           
              <NavLink to={`/crypto/${item.uuid}`}>
                <Card
                  title={`${item.rank} . ${item.name} `}
                  extra={<img className="crypto-image" src={item.iconUrl} />}
                  hoverable>
                  <p>Price: {millify(item.price)} </p>
                  <p>Market Cap: {millify(item.marketCap)} </p>
                  <p>Daily Change: {millify(item.change)} </p>
                </Card>
              </NavLink>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
