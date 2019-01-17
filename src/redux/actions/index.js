import { FETCH_DATA, ERROR } from './types'
import axios from 'axios'

export const fetchData = () => {
  return dispatch => {
    axios
      .get('https://sicca-api.herokuapp.com/remote')
      .then(resp => {
        dispatch({
          type: FETCH_DATA,
          payload: resp.data[0]
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR
        })
      })
  }
}
