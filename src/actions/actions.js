import { WEATHER_DETAILS, WEATHER_ICONS } from "./actionTypes";

export const weatherDetails = weather => dispatch => {
  dispatch({
    type: WEATHER_DETAILS,
    weather
  })
}

export const weatherIcon = icon => dispatch => {
  dispatch({
    type: WEATHER_ICONS,
    icon
  })
}
