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
  const [searchTerm,setSearchTerm]=useState('');

  useEffect(()=>{
    const filteredData=cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  },[cryptoList,searchTerm]);

//

  console.log(cryptos);
if(isFetching) return 'Loading...';

  return (
   <>
   {!simplified && (
    <div className='search-crypto'>
    <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
   </div>
   )}
   {/* <div className='search-crypto'>
    <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>

   </div> */}
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
