import * as constants from '../constants'

export const DEFAULT_STATE = []

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.FETCH_PROJECTS.FULFILLED:
      return action.payload.projects
    default:
      return state
  }
}
