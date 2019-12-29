import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='form-group'>
            <div className='col-md-3'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                className='form-control'
                name='city'
                placeholder='City name'
                autoComplete='off'
              />
            </div>
            <div className='col-md-3'>
              <label htmlFor='country'>Country</label>
              <input
                type='text'
                className='form-control'
                name='country'
                placeholder='Country name'
                autoComplete='off'
              />
            </div>
            <div>
              <button
                className='btn btn-outline-primary'
                type='submit'
              >
                Get Weather
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
