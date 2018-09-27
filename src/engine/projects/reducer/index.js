import { combineReducers } from 'redux'
import network from './network'
import projects from './projects'
import selectedProject from './project'

export default combineReducers({ projects, network, selectedProject })
