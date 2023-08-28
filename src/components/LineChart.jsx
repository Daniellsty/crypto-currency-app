import { Col, Row, Typography } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";



const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    Chart.register(...registerables);
    const timeStamp = [];
  const price = [];

  for (let x = 0; x < coinHistory?.data?.history.length; x+=1) {
    timeStamp.push(new Date(coinHistory.data.history[x].timestamp).toLocaleDateString());
    price.push(coinHistory.data.history[x].price);
  }

  

  let data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: price,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        responsive:true,
        tension: 0.1
      },
    ],
  };

  let options = {
    scales: {
      y: {

        ticks:{
          beginAtZero:true
        }
      }
  }
  };



  return (
    <div>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {coinName} price chart{" "}
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title className="price-change" level={5}>
            {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title className="current-price" level={5}>
            current {coinName} price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
