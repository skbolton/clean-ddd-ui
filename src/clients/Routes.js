import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProjectsPage from './scenes/projects/Container'
import BookPage from './scenes/book/Container'

export default () => (
  <Switch>
    <Route exact path="/projects" component={ProjectsPage}/>
    <Route path="/projects/:id" component={BookPage}/>

    <Redirect to="/projects"/>
  </Switch>
)
