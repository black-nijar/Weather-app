import { WEATHER_DETAILS, WEATHER_ICONS } from "../actions/actionTypes";

const initState = []

export const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case WEATHER_DETAILS:
      return action.weather; 

    case WEATHER_ICONS:
      return  {
        ...state,
      'weatherIcon':  action.icon
      }

    default:
      return state
  }
}