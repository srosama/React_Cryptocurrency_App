import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery }  from '../services/CoinrankingAPI'
import millify from 'millify';
const { Title } = Typography;
import Cryptocurrency from './Cryptocurrency'
import News from './News'


const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(globalStats)
  if (isFetching) {
    return 'Loading...';
  }

  return (
    <>
    <Title level={2} className='heading'>International Crypto States</Title>
    <Row>
      <Col span={12}><Statistic title="Totoal Cryptocurrency" value={globalStats.total}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal Exchanges" value={millify(globalStats.totalExchanges)}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>
    </Row>
    <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cys" className="show-more">Show more</Link></Title>
      </div>
      <Cryptocurrency simplified />
      
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;