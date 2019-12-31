import { WEATHER_DETAILS, WEATHER_ICONS, HANDLE_ERROR } from "../actions/actionTypes";

const initState = []

export const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case WEATHER_DETAILS:
      return action.weather;

    case WEATHER_ICONS:
      return {
        ...state,
        'weatherIcon': action.icon
      }
    case HANDLE_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}