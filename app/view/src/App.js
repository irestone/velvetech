import React, { Component } from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { initApp } from './store/actions/app'

// ui
import 'typeface-roboto'
import { CssBaseline, Container } from '@material-ui/core'

// components
// import { Info } from './app/Info'

// views/pages
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Products } from './views/Products'
import { Categories } from './views/Categories'
import { NotFound } from './views/NotFound'

export class AppComponent extends Component {
  componentDidMount() {
    this.props.initApp()
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <CssBaseline />
          <Container maxWidth='md'>
            <Link to='/'>Products</Link>
            {' | '}
            <Link to='/categories'>Categories</Link>
            <Switch>
              <Route path='/' exact component={Products} />
              <Route path='/categories' exact component={Categories} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    )
  }
}

AppComponent.propTypes = {
  initApp: PropTypes.func,
}

const emptyState = {}

export const App = connect(
  () => emptyState,
  { initApp }
)(AppComponent)
