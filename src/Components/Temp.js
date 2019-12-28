import React from 'react'

const Temp = ({min, max}) => {
  return (
    <div>
      <h3>
        <span className='px-4'>{min}&deg;</span>
        <span className='px-4'>{max}&deg;</span>
      </h3>
    </div>
  )
}

export default Temp
