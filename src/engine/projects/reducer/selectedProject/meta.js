import * as constants from '@engine/projects/constants'

export const DEFAULT_STATE = {
  id: null,
  name: null,
  createdOn: null
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.FETCH_PROJECT.FULFILLED: {
      const { name, createdOn, id } = action.payload.project
      return {
        id,
        name,
        createdOn
      }
    }

    default:
      return state
  }
}
