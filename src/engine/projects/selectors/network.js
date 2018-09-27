import { prop, compose, equals } from 'ramda'
import { namespace } from '../constants'

export const network = compose(prop('network'), prop(namespace))

export const isLoadingOn = (state, actionType) =>
  compose(
    equals(actionType),
    prop('loading'),
    network
  )(state)
