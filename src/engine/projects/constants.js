import { defineAction } from 'redux-define'

const states = [ 'PENDING', 'FULFILLED', 'REJECTED', 'CANCELLED' ]

export const namespace = 'projects'

export const FETCH_PROJECTS = defineAction('FETCH_PROJECTS', states, namespace)
export const FETCH_PROJECT = defineAction('FETCH_PROJECT', states, namespace)
export const CREATE_PROJECTS = defineAction('CREATE_PROJECTS', states, namespace)
