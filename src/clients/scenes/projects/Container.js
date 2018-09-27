import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { lifecycle } from 'recompose';
import projects from '@engine/projects'

const Component = ({ loading, projects = [] }) => (
  loading
    ? <p>Fetching projects...</p>
    : projects[0]
      ? <p>Go To Project <Link to={`/projects/${projects[0].id}`}>{projects[0].id}</Link></p>
      : null
)

export const ProjectsContainer = lifecycle({
  componentDidMount () {
    // this.props.fetchProjects()
  }
})(Component)

export default connect(
  state => ({
    loading: projects.selectors.network.isLoadingOn(
      state, projects.constants.FETCH_PROJECTS.ACTION
    ),
    projects: projects.selectors.projects(state)
  }),
  {
    fetchProjects: projects.actions.fetchProjects
  }
)(ProjectsContainer)
