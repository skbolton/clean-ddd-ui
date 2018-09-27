import { createStore } from 'redux'
import rootReducer from './rootReducer'
import enhancers from './middleware'

export default () => createStore(rootReducer, enhancers())
