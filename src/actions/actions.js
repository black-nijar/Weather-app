import { WEATHER_DETAILS, WEATHER_ICONS, HANDLE_ERROR } from "./actionTypes";

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
export const errHandle = ()=> dispatch => {
  dispatch({
    type: HANDLE_ERROR,
  })
}