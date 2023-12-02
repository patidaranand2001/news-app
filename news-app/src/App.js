
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <NavBar />

        <Routes>
          <Route exect path="/" element={<News key='general' pagesize={this.pageSize} country='us' category='general' />} />
          <Route exect path="/business" element={<News key='business' pagesize={this.pageSize} country='us' category='business' />} />
          <Route exect path="/entertainment" element={<News key='entetainment' pagesize={this.pageSize} country='us' category='entertainment' />} />
          <Route exect path="/sports" element={<News key='sports' pagesize={this.pageSize} country='us' category='sports' />} />
          <Route exect path="/science" element={<News key='science' pagesize={this.pageSize} country='us' category='science' />} />
          <Route exect path="/technology" element={<News key='technology' pagesize={this.pageSize} country='us' category='technology' />} />

        </Routes>
      </div>
    )
  }
}

//
//       