import { createLogic } from 'redux-logic'
import { of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import * as constants from './constants'

export const fetchProjectsLogic = createLogic({
  debounce: 500,
  latest: true,
  type: constants.FETCH_PROJECTS.ACTION,
  cancelType: constants.FETCH_PROJECTS.CANCELLED,
  process({ http }) {
    return http.get('/projects').pipe(
      map(http.getBody),
      map(({ projects }) => ({
        type: constants.FETCH_PROJECTS.FULFILLED,
        payload: {
          projects
        }
      })),
      catchError(err =>
        of({
          type: constants.FETCH_PROJECTS.REJECTED,
          payload: {
            error: err
          }
        })
      )
    )
  }
})

export const fetchProjectById = createLogic({
  debounce: 500,
  latest:true,
  type: constants.FETCH_PROJECT.ACTION,
  cancelType: constants.FETCH_PROJECT.CANCELLED,
  process({ http, action }) {
    return http.get(`/projects/${action.payload.id}`).pipe(
      map(http.getBody),
      map(
        ({ project }) => ({ type: constants.FETCH_PROJECT.FULFILLED, payload: { project } }),
        err => ({ type: constants.FETCH_PROJECT.REJECTED, payload: { error: err }})
      )
    )
  }
})

export const createProjectsLogic = createLogic({
  debounce: 500,
  latest: true,
  type: constants.CREATE_PROJECTS.ACTION,
  process({ http, action }) {
    return http.post(
      '/projects',
      {
        project: {
          text: action.payload.text,
          completed: action.payload.completed
        }
      }
    ).pipe(
      map(http.getBody),
      map(
        ({ project }) => ({
          type: constants.CREATE_PROJECTS.FULFILLED,
          payload: {
            project
          }
        }),
        err => ({
          type: constants.CREATE_PROJECTS.REJECTED,
          payload: {
            error: err
          }
        })
      ),
    )
  }
})

export default [
  fetchProjectsLogic,
  fetchProjectById,
  createProjectsLogic
]
