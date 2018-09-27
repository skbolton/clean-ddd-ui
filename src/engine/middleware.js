import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogicMiddleware } from 'redux-logic'
import coreProcessors from './core/processors'
import { HttpClient } from './http'
import projects from './projects'

const logicDeps = {
  http: new HttpClient({ baseUrl: 'http://localhost:4000/api', crossDomain: true })
}

const logicMiddleware = createLogicMiddleware(
  [ ...projects.processors ],
  logicDeps
)


export default () => composeWithDevTools(
  applyMiddleware(
    logicMiddleware,
    ...coreProcessors
  )
)
