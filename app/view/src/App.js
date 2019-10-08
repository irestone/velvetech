import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { initApp } from './store/actions/app'

// routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Products } from './views/Products'
import { Categories } from './views/Categories'
import { NotFound } from './views/NotFound'
import { Nav } from './components/Nav'

// ui
import 'typeface-roboto'
import { CssBaseline, Container, Box } from '@material-ui/core'

// =====================================
//  BASE
// =====================================

const AppBase = ({ initApp }) => {
  useEffect(() => {
    initApp()
  })

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

AppBase.propTypes = { initApp: PropTypes.func }

// =====================================
//  WRAPPINGS
// =====================================

export const App = connect(
  () => ({}),
  { initApp }
)(AppBase)
