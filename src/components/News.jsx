// import React from 'react';
// import { Typography, Row, Col, Card } from 'antd';

// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

// const { Text, Title } = Typography;

// const News = ({ simplified }) => {
//   const { data: cryptoNews, isLoading, isError } = useGetCryptoNewsQuery();

//   if (isLoading) return <h2>Loading...</h2>;
//   if (isError) return <h2>Failed to load news</h2>;

//   // ✅ CoinGecko returns "coins"
//   const newsList = Array.isArray(cryptoNews?.coins)
//     ? cryptoNews.coins
//     : [];

//   if (newsList.length === 0) {
//     return <h2>No data available</h2>;
//   }

//   return (
//     <Row gutter={[24, 24]}>
//       {newsList
//         .slice(0, simplified ? 6 : 12)
//         .map((coin, i) => {
//           const item = coin.item;

//           return (
//             <Col xs={24} sm={12} lg={8} key={i}>
//               <Card hoverable className="news-card">

//                 {/* Title + Image */}
//                 <div className="news-image-container">
//                   <Title level={4}>
//                     {item.name}
//                   </Title>

//                   <img
//                     src={item.small}
//                     alt={item.name}
//                     style={{ maxWidth: '100px' }}
//                   />
//                 </div>

//                 {/* Info */}
//                 <p>Symbol: {item.symbol}</p>

//                 <div className="news-provider">
//                   <Text>Rank: {item.market_cap_rank}</Text>
//                 </div>

//               </Card>
//             </Col>
//           );
//         })}
//     </Row>
//   );
// };

// export default News;


import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { fetchCryptoNews } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchCryptoNews();
      setNews(data);
      setLoading(false);
    };

    getNews();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (!news.length) return <h2>No news available</h2>;

  return (
    <>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        📰 Crypto News
      </Title>

      <Row gutter={[24, 24]}>
        {news
          .slice(0, simplified ? 6 : 12)
          .map((article, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={article.url} target="_blank" rel="noreferrer">

                  {/* Title + Image */}
                  <div className="news-image-container">
                    <Title level={4}>
                      {article.title}
                    </Title>

                    <img
                      src={
                        article.image ||
                        "https://via.placeholder.com/150"
                      }
                      alt="news"
                      style={{ maxWidth: '100%', maxHeight: '150px' }}
                    />
                  </div>

                  {/* Description */}
                  <p>
                    {article.description
                      ? article.description.length > 100
                        ? article.description.substring(0, 100) + "..."
                        : article.description
                      : "No description available"}
                  </p>

                  {/* Provider + Time */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Avatar size="small">
                        {article.source?.name?.charAt(0) || "N"}
                      </Avatar>
                      <Text>
                        {article.source?.name || "Unknown"}
                      </Text>
                    </div>

                    <Text>
                      {article.publishedAt
                        ? moment(article.publishedAt).fromNow()
                        : "Recently"}
                    </Text>
                  </div>

                </a>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default News;
