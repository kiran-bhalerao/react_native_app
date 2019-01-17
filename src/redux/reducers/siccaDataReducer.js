import { FETCH_DATA, ERROR } from '../actions/types'

const INITAIL_STATE = {
  time: '',
  soilMoistureOne: '',
  soilMoistureTwo: '',
  soilMoistureThree: '',
  humidity: '',
  soilTemp: '',
  temp: '',
  pumpStatus: '',
  battery: ''
}

const returnHighSoilTemp = action => {
  return (action.payload.ST1 > action.payload.ST2
    ? action.payload.ST1
    : action.payload.ST2) > action.payload.ST3
    ? action.payload.ST1 > action.payload.ST2
      ? action.payload.ST1
      : action.payload.ST2
    : action.payload.ST3
}

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...INITAIL_STATE,
        time: action.payload.Time_stamp,
        soilMoistureOne: action.payload.SM1,
        soilMoistureTwo: action.payload.SM2,
        soilMoistureThree: action.payload.SM3,
        humidity: action.payload.Humidity,
        soilTemp: returnHighSoilTemp(action),
        temp: action.payload.Temp,
        pumpStatus: action.payload.Pump_status,
        battery: action.payload.Battery
      }
    case ERROR:
      return state
    default:
      return state
  }
}
