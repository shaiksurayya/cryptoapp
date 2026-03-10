import React from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery();

  if (isLoading) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.Data?.slice(0, simplified ? 6 : 12).map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>

                <img
                  src={news.imageurl}
                  alt="news"
                  style={{ maxWidth: '100%', maxHeight: '150px' }}
                />
              </div>

              <p>
                {news.body.length > 100
                  ? `${news.body.substring(0, 100)}...`
                  : news.body}
              </p>

              <div className="news-provider">
                <div>
                  <Avatar size="small">
                    {news.source.charAt(0)}
                  </Avatar>
                  <Text className="provider-name">
                    {news.source}
                  </Text>
                </div>
                <Text>{moment(news.published_on * 1000).fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
