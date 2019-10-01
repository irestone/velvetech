import React, { Component } from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { initApp } from './store/actions/app'

// ui
import 'typeface-roboto'
import { CssBaseline, Container, Box } from '@material-ui/core'

// components
// import { Info } from './app/Info'

// views/pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Products } from './views/Products'
import { Categories } from './views/Categories'
import { NotFound } from './views/NotFound'
import { Nav } from './components/Nav'

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
            <Nav />
            <Box mt={5}>
              <Switch>
                <Route path='/' exact component={Products} />
                <Route path='/categories' exact component={Categories} />
                <Route component={NotFound} />
              </Switch>
            </Box>
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
