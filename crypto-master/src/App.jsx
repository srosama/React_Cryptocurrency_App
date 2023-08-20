import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space} from 'antd';
// CSS
import './App.css'

// Component
import Nav from './components/Nav'
import News from './components/News'
import Exchanges from './components/Exchanges'
import Cryptocurrency from './components/Cryptocurrency'
import Homepage from './components/Homepage'
import CryptoDet from './components/CryptoDet'
import About from './components/About'

// var date = new Date.now()
const App = () => {
  return (
    <div className="appMain">
        
        <div className="navbar">
          <Nav/>
        </div>

        <div className="main">
            <Layout>
              <div className='routes'>
                <Switch>
                  <Route exact path='/exchanges'>
                      <Exchanges/>
                  </Route>

                  <Route exact path='/'>
                      <Homepage/>
                  </Route>
                  
                  
                  <Route exact path='/cys'>
                      <Cryptocurrency/>
                  </Route>
                  
                  <Route exact path='/news'>
                      <News/>
                  </Route>

                  <Route exact path='/crypto/:coindID'>
                      <CryptoDet/>
                  </Route>

                  <Route exact path='/about'>
                      <About/>
                  </Route>

                </Switch>
              </div>
            </Layout>
        </div>

    </div>
  )
}

export default App