import React from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({
    newsCategory: 'cryptocurrency',
    count: simplified ? 6 : 12,
  });

  if (isLoading) return 'Loading...';

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.articles?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={news.url || i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>

                {news.image && (
                  <img
                    src={news.image}
                    alt="news"
                    style={{ maxWidth: '100%', maxHeight: '150px' }}
                  />
                )}
              </div>

              <p>
                {news.description?.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>

              <div className="news-provider">
                <div>
                  <Avatar size="small">
                    {news.source.name.charAt(0)}
                  </Avatar>
                  <Text className="provider-name">
                    {news.source.name}
                  </Text>
                </div>
                <Text>{moment(news.publishedAt).fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
