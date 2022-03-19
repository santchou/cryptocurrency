import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Card, Input } from "antd";

import axios from "axios";
import cryptoImage from "../images/cryptoImage.jpg";

import Loader from "./Loader";

const { Title } = Typography;

const News = ({ simplified }) => {
  const [cryptoNew, setCryptoNew] = useState();

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": "fdfd3fd3f2msh8119699115a701dp129606jsn17485a4c50a1",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setCryptoNew(
          simplified ? response.data.slice(0, 10) : response.data.slice(0, 100)
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  console.log(cryptoNew);

  if (cryptoNew?.title) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <div>
            <Input type="text" placeholder="Search news by words"></Input>
          </div>
        </Col>
      )}
      {cryptoNew?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title.length > 60
                    ? `${news.title.substring(0, 60)}...`
                    : news.title}
                </Title>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                  src={cryptoImage}
                  alt="crypto"
                />
              </div>
              <p>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "blue",
                  }}
                >
                  Source:{" "}
                </span>
                {news.source}
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
