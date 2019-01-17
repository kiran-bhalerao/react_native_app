import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import siccaDataReducer from '../reducers/siccaDataReducer'

const rootReducer = combineReducers({
  siccaData: siccaDataReducer
})

export default createStore(rootReducer, {}, applyMiddleware(thunk))
