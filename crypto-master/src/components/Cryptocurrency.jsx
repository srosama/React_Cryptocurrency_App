import React, { useState, useEffect } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery }  from '../services/CoinrankingAPI'
import Loader from './Loader';



const Cryptocurrency = ({simplified}) => {
  const count = simplified ? 10 : 200
  const {data:coinList, isFetching} = useGetCryptosQuery(count);
  const [coins, setCoins] = useState([])
  const [searchIn, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = coinList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchIn)); 
    setCoins(filteredData);

  }, [coinList,searchIn])


  if (isFetching) {
    return <Loader />
  };

  return (
    <>
     <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>


    <Row gutter={[32, 32]} className='crypto-card-container'>
      {coins?.map((currency, id) => (
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={id}>
            <Link to={`/cys/${currency.uuid}`}>
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