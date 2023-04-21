import './App.css';

import React, { Component } from 'react'
import { Navbar } from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  pagesize=9;
  apikey=process.env.REACT_APP_NEWS_API
  
  render() {
    return (
      <div>
          
          
       <Router>
       <Navbar/>
      
        <Routes>
          <Route exact path="/"element={  <News apikey={this.apikey}/>}/>
          <Route exact path="/business"element={  <News apikey={this.apikey} pagesize={this.pagesize}  key="business"  country="us" category="business"/>}/>
          <Route exact path="/entertainment"    element={  <News apikey={this.apikey} pagesize={this.pagesize} key="entertainment" country="us" category="entertainment"/>}/>
          <Route exact path="/general" element={  <News apikey={this.apikey} pagesize={this.pagesize} country="us"  key="general"   category="general"/>}/>
          <Route exact path="/health" element={  <News apikey={this.apikey} pagesize={this.pagesize} country="us" key="health"   category="health"/>}/>
          <Route exact path="/science"   element={  <News apikey={this.apikey} pagesize={this.pagesize} country="us" key="science" category="science"/>}/>
          <Route exact path="/sports"  element={  <News apikey={this.apikey} pagesize={this.pagesize} country="us"   key="sports" category="sports"/>}/>
          <Route exact path="/technology"   element={  <News apikey={this.apikey} pagesize={this.pagesize}  key="technology" country="us" category="technology"/>}/>
        </Routes>
     
    </Router>
      </div>
    )
  }
}

