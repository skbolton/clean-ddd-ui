import { prop, compose } from 'ramda'
import { namespace } from '@engine/projects/constants'
import * as network from './network'

const projects = compose(prop('projects'), prop(namespace))
export default { network, projects }


