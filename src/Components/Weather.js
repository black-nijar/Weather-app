import React from 'react'
import Temp from './Temp';

const Weather = () => {
  return (
    <div className='app'>
     <h2 className='app-name'>Weather app</h2>
     <h5 className='py-4'>
       <i className='wi wi-day-sunny display-3'></i>
     </h5>
     <h2 className='py-2'>25&deg;</h2>
     <Temp min={10} max={30}/>
    </div>
  )
}

export default Weather
