import React, { Component } from 'react'
import { connect } from 'react-redux'
import Temp from './Temp'
import { weatherDetails, weatherIcon } from '../actions/actions'
import Form from './Form';

class Weather extends Component {
  componentDidMount() {
    this.fetchWeather()
    this.weatherIcons = {
      thunderStorm: 'wi-thunderstorm',
      drizzle: 'wi-sleet',
      rain: 'wi-storm-showers',
      snow: 'wi-snow',
      atmosphere: 'wi-fog',
      clear: 'wi-day-sunny',
      clouds: 'wi-day-fog'
    }
  }
  calCelsius = temp => {
    let cell = Math.floor(temp - 273.15)
    return cell
  }
  getWeatherIcon = (icon, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.props.weatherIcon(icon.thunderStorm)
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.props.weatherIcon(icon.drizzle)
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.props.weatherIcon(icon.rain)
        break;
      case rangeId >= 600 && rangeId <= 622:
          this.props.weatherIcon(icon.snow)
          break;
      case rangeId >= 701 && rangeId <= 781:
        this.props.weatherIcon(icon.atmosphere)
        break;
      case rangeId === 800:
        this.props.weatherIcon(icon.clear)
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.props.weatherIcon(icon.clouds)
        break;
      default:
        this.props.weatherIcon(icon.clouds)
    }
  }
  fetchWeather = async () => {
    const apiKey = 'f176ce14191c6011d9ffe756afd201e5'
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
    const response = await apiCall.json()
    const country = response.sys.country
    const sunRise = response.sys.sunrise
    const sunSet = response.sys.sunset
    const city = response.name
    const temp = response.main.temp
    const feelsLike = response.main.feels_like
    const tempMin = response.main.temp_min
    const tempMax = response.main.temp_max
    const pressure = response.main.pressure
    const humidity = response.main.humidity
    const clouds = response.clouds.all
    const date = response.dt
    const description = response.weather[0].description
    const icon = response.weather[0].icon
    const weatherName = response.weather[0].main
    const id = response.weather[0].id
    let weatherData = {
      country: country,
      city: city,
      date: date,
      sunRise: sunRise,
      sunSet: sunSet,
      humidity: humidity,
      pressure: pressure,
      clouds: clouds,
      weatherName: weatherName,
      description: description,
      icon: icon,
      celsius: this.calCelsius(temp),
      tempMax: this.calCelsius(tempMax),
      tempMin: this.calCelsius(tempMin),
      feelsLike: this.calCelsius(feelsLike),
      weatherIcon: this.props.icon
    }
    this.props.weatherDetails(weatherData)
    this.getWeatherIcon(this.weatherIcons, id)
  }
  render() {
    const { weather } = this.props
    return (
      <div>
        <div className='app'>
          <h2 className='app-name'>Weather app</h2>
          <Form/>
          <h2>{weather.city}</h2>
          <h1 className='py-4'>
            <i className={`wi ${weather.weatherIcon}`} />
          </h1>
          <h2 className='py-2'>{weather.celsius}&deg;</h2>
          <Temp min={weather.tempMin} max={weather.tempMax} />
          <h4>{weather.description}</h4>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
  }
}

export default connect(mapStateToProps, { weatherDetails, weatherIcon })(Weather)
