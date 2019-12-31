import React, { Component } from 'react'

class Form extends Component {
  getError = () => {
    const { error } = this.props
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          Please Enter City and Country
        </div>
      )
    }
  }
  render() {
    const { error } = this.props
    return (
      <div className='container'>
        <div>
          {
            error ? this.getError() : null
          }
        </div>
        <form className='form-group' onSubmit={this.props.getWeather}>
          <div className='row'>
            <div className='col-md-3 offset-md-2'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                className='form-control'
                name='city'
                placeholder='City name'
                autoComplete='off'
              />
            </div>
            <div className='col-md-3 '>
              <label htmlFor='country'>Country</label>
              <input
                type='text'
                className='form-control'
                name='country'
                placeholder='Country name'
                autoComplete='off'
              />
            </div><br />
            <div className='col-md-3 mt-md-0 text-md-left'><br />
              <button
                className='btn btn-outline-primary'
                type='submit'
              >
                Get Weather
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
