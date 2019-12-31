import React, { Component } from 'react'
import { connect } from 'react-redux'
import Temp from './Temp'
import { weatherDetails, weatherIcon, errHandle } from '../actions/actions'
import Form from './Form';

class Weather extends Component {
  componentDidMount() {
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
  fetchWeather = async (e) => {
    e.preventDefault();
    const countryName = e.target.elements.country.value
    const cityName = e.target.elements.city.value
    if (cityName && countryName) {
      const apiKey = 'f176ce14191c6011d9ffe756afd201e5'
      const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${apiKey}`)
      const response = await apiCall.json()
      if (response.name === undefined || response.sys.country === undefined) {
        alert(`Check city or country name`)
      } else {
        const country = `${response.name},${response.sys.country}`
        const sunRise = response.sys.sunrise
        const sunSet = response.sys.sunset
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
        const windSpeed = response.wind.speed
        const windDirection = response.wind.deg
        const location = `${response.coord.lon},${response.coord.lat}`
        let weatherData = {
          country: country,
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
          weatherIcon: this.props.icon,
          windDirection: windDirection,
          windSpeed: windSpeed,
          location: location,
          error: false
        }
        this.props.weatherDetails(weatherData)
        this.getWeatherIcon(this.weatherIcons, id)
      }
    } else {
      this.props.errHandle()
    }
  }
  render() {
    const { weather } = this.props
    return (
      <div>
        <div className='app'>
          <h2 className='app-name'>Weather app</h2>
          <Form getWeather={this.fetchWeather} error={weather.error} />
          <h2>{weather.country} </h2>
          <h1 className='py-4'>
            <i className={`wi ${weather.weatherIcon}`} />
          </h1>
          {
            weather.celsius ? (
              <div className='weather-detail'>
                <h2 className='py-2'>{weather.celsius}&deg;</h2>
                <Temp min={weather.tempMin} max={weather.tempMax} />
                <h4>Description : {weather.description}</h4>
                <h4> Pressure   : {weather.pressure} hPa</h4>
                <h4> Humidity   : {weather.humidity} %</h4>
                <h4>  Clouds    : {weather.clouds} %</h4>
                <h4> Wind direction: {weather.windDirection}&deg;</h4>
                <h4> Wind speed : {weather.windSpeed} m/s</h4>
              </div>) : null
          }
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

export default connect(mapStateToProps, { weatherDetails, weatherIcon, errHandle })(Weather)
