
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Routes>
          <Route exect path="/" element={<News key='general' pagesize={6} country='us' category='general' />} />
          <Route exect path="/business" element={<News key='business' pagesize={6} country='us' category='business' />} />
          <Route exect path="/entertainment" element={<News key='entetainment' pagesize={6} country='us' category='entertainment' />} />
          <Route exect path="/sports" element={<News key='sports' pagesize={6} country='us' category='sports' />} />
          <Route exect path="/science" element={<News key='science' pagesize={6} country='us' category='science' />} />
          <Route exect path="/technology" element={<News key='technology' pagesize={6} country='us' category='technology' />} />

        </Routes>
      </div>
    )
  }
}

//
//       