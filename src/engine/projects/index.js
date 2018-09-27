import * as actions from './actions'
import * as constants from './constants'
import selectors from './selectors'
import reducer from './reducer'
import processors from './processors'

export default {
  actions,
  constants,
  namespace: constants.namespace,
  reducer,
  processors,
  selectors
}
