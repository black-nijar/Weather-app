import React, { Component } from 'react'
import './App.css'
import Weather from './Components/Weather';
import 'weather-icons/css/weather-icons.css'

class App extends Component {
  render() {
    return (
      <div className='ui container'>
       <Weather/>
      </div>
    )
  }
}

export default App
