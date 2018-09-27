import { normalize, schema } from 'normalizr'
import * as constants from '@engine/projects/constants'

const Page = new schema.Entity('pages')
const Section = new schema.Entity('sections', {
  pages: [Page]
})
const Project = new schema.Entity('project', {
  sections: [Section]
})

export const DEFAULT_STATE = normalize({}, Project)

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.FETCH_PROJECT.FULFILLED: {
      const { entities, result } = normalize(action.payload.project, Project)
      const { pages, sections, project } = entities
      return {
        pages,
        sections,
        project: project[result]
      }
    }
    default:
      return state
  }
}
