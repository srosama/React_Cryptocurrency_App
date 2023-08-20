import React, { useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery }  from '../services/CoinrankingAPI'



const Cryptocurrency = () => {
  const {data:coinList, isFetching} = useGetCryptosQuery();
  const [coins, setCoins] = useState(coinList?.data?.coins)
  console.log(coins)
  return (
    <>
    <h1>crypto-card-container</h1>
    <Row gutter={[32, 32]} className='crypto-card-container'>
      {coins.map((currency) => (
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`cys/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`}
               extra={<img className='crypto-image' src={currency.iconUrl}></img>}
               hoverable={true}
               >
               <p>Price: {millify(currency.price)}</p>
               <p>Market Cap: {millify(currency.marketCap)}</p>
               <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrency