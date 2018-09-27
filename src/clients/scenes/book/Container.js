import React from 'react'
import { lifecycle } from 'recompose'
import { connect } from 'react-redux'
import projects from '@engine/projects'

const component = () => (
  <div>Hey There</div>
)

export const BookContainer = lifecycle({
  componentDidMount () {
    const { fetchBook, match } = this.props
    fetchBook(match.params.id)
  }
})(component)

export default connect(
  null,
  {
    fetchBook: projects.actions.fetchBook
  }
)(BookContainer)
