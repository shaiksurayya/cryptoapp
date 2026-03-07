// import React, { useState } from 'react';
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'moment';

// import { useGetCryptosQuery } from '../services/cryptoApi';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import Loader from './Loader';

// const demoImage =
//   'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

// const { Text, Title } = Typography;
// const { Option } = Select;

// const News = ({ simplified }) => {
//   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

//   const { data } = useGetCryptosQuery(100);

//   const {
//     data: cryptoNews,
//     isFetching,
//     error,
//   } = useGetCryptoNewsQuery({
//     newsCategory,
//     count: simplified ? 6 : 12,
//   });
//   console.log(news);

//   if (isFetching) return <Loader />;

//   if (error) return <h2>Failed to load news 🚨</h2>;

//   return (
//     <Row gutter={[24, 24]}>
//       {!simplified && (
//         <Col span={24}>
//           <Select
//             showSearch
//             className="select-news"
//             placeholder="Select a Crypto"
//             optionFilterProp="children"
//             onChange={(value) => setNewsCategory(value)}
//           >
//             <Option value="Cryptocurrency">Cryptocurrency</Option>

//             {data?.data?.coins?.map((currency) => (
//               <Option key={currency.uuid} value={currency.name}>
//                 {currency.name}
//               </Option>
//             ))}
//           </Select>
//         </Col>
//       )}

//       {cryptoNews?.value?.map((news, i) => (
//         <Col xs={24} sm={12} lg={8} key={i}>
//           <Card hoverable className="news-card">
//             <a href={news.url} target="_blank" rel="noreferrer">
//               <div className="news-image-container">
//                 <Title level={4} className="news-title">
//                   {news.name}
//                 </Title>

//                 <img
//                   src={
//                     news?.image?.thumbnail?.contentUrl || demoImage
//                   }
//                   alt="news"
//                 />
//               </div>

//               <p>
//                 {news.description?.length > 100
//                   ? `${news.description.substring(0, 100)}...`
//                   : news.description}
//               </p>

//               <div className="provider-container">
//                 <div>
//                   <Avatar
//                     src={
//                       news.provider[0]?.image?.thumbnail
//                         ?.contentUrl || demoImage
//                     }
//                   />
//                   <Text className="provider-name">
//                     {news.provider[0]?.name}
//                   </Text>
//                 </div>

//                 <Text>
//                   {moment(news.datePublished)
//                     .startOf('second')
//                     .fromNow()}
//                 </Text>
//               </div>
//             </a>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default News;

import React, { useState } from 'react';
import { Select, Typography, Row, Col, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title, Text } = Typography;
const { Option } = Select;

const News = () => {
  const [newsCategory, setNewsCategory] = useState('cryptocurrency');

  const { data: news, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: 12,
  });

  if (isFetching) return <h2>Loading...</h2>;

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select Category"
          optionFilterProp="children"
          onChange={(value) => setNewsCategory(value)}
        >
          <Option value="cryptocurrency">Cryptocurrency</Option>
          <Option value="bitcoin">Bitcoin</Option>
          <Option value="ethereum">Ethereum</Option>
        </Select>
      </Col>

      {news?.articles?.map((article, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable>
            <a href={article.url} target="_blank" rel="noreferrer">
              <Title level={4}>{article.title}</Title>
            </a>

            {article.image && (
              <img
                src={article.image}
                alt="news"
                style={{ width: '100%', marginBottom: '10px' }}
              />
            )}

            <Text>{article.description}</Text>
            <br />
            <Text strong>{article.source.name}</Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;