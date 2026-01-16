import React from 'react'
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';
import { useGetCryptosQuery } from '../services/CryptoApi';
import { useState,useEffect } from 'react';

const Cryptocurrencies = ({simplified}) => {
  const count=simplified?10:100;
  const {data:cryptoList,isFetching}=useGetCryptosQuery(count);
  const [cryptos,setCryptos]=useState(cryptoList?.data?.coins);
  
  console.log(cryptos);
if(isFetching) return 'Loading...';

  return (
   <>
   <div className='search-crypto'>
    

   </div>
   <Row gutter={[32,32]} className="crypto-card-container">
    {cryptos?.map((currency)=>(
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
          <Card title={`${currency.name} (${currency.symbol})`} extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}hoverable>
          <p>Price: {currency.price}</p>
          <p>Market Cap: {currency.marketCap}</p>
          <p>Daily Change: {currency.change}</p>
          </Card>
          </Link>
          </Col>
    ))}
    </Row>
   </>
  )
}

export default Cryptocurrencies
