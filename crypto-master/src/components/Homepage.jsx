import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery }  from '../services/CoinrankingAPI'

const { Title } = Typography;

const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(globalStats)
  if (isFetching) {
    return 'Loading...';
  }

  return (
    <>
    <Title level={2} className='heading'>International Crypto States</Title>
    <Row>
      <Col span={12}><Statistic title="Totoal Cryptocurrency" value={5}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal Exchanges" value={5}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal Market Cap" value={5}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal 24h Volume" value={5}></Statistic></Col>
      <Col span={12}><Statistic title="Totoal Markets" value={5}></Statistic></Col>
    </Row>
    </>
  );
};

export default Homepage;