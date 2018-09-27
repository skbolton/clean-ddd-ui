import * as actionTypes from './constants'

export const fetchProjects = () => ({
  type: actionTypes.FETCH_PROJECTS.ACTION
})

export const cancelFetchProjects = () => ({
  type: actionTypes.FETCH_PROJECTS.CANCELLED
})

export const fetchBook = id => ({
  type: actionTypes.FETCH_PROJECT.ACTION,
  payload: {
    id
  }
})
