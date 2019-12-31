import React from 'react'

const Temp = ({min, max}) => {
  if (min && max){
  return (
    <div>
      <h3>
        <span className='px-4'>min {min}&deg;</span>
        <span className='px-4'>max {max}&deg;</span>
      </h3>
    </div>
  )
  } else {
    return (
      <div>
        
      </div>
    )
  }
}

export default Temp
