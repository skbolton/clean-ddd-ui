import * as constants from '../constants'

export const DEFAULT_STATE = {
  loading: false,
  lastSuccess: null,
  lastFailure: {
    on: null,
    error: null
  }
}

const success = (state, actionType) => ({
  ...state,
  lastSuccess: actionType,
  loading: false
})

const error = (state, action) => ({
  ...state,
  lastFailure: {
    on: action.type,
    error: action.payload.error
  }
})

const loading = (state, actionType) => ({
  ...state,
  loading: actionType
})

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case constants.FETCH_PROJECTS.ACTION:
      return loading(state, action.type)
    case constants.FETCH_PROJECTS.FULFILLED:
      return success(state, action.type)
    case constants.FETCH_PROJECTS.REJECTED:
      return error(state, action)
    case constants.FETCH_PROJECT.ACTION:
      return loading(state, action.type)
    case constants.FETCH_PROJECT.FULFILLED:
      return success(state, action.type)
    case constants.FETCH_PROJECT.REJECTED:
      return error(state, action)
    default:
      return state
  }
}
