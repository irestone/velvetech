import React from 'react'
import PropTypes from 'prop-types'

import { Link, withRouter } from 'react-router-dom'
import { Tabs, Tab } from '@material-ui/core'

const links = [
  { label: 'Products', to: '/', index: 0 },
  { label: 'Categories', to: '/categories', index: 1 },
]

export const NavComponent = ({ location: { pathname } }) => {
  const [route, setRoute] = React.useState(
    links.find(({ to }) => to === pathname).index
  )

  const handleChange = (event, newRoute) => {
    setRoute(newRoute)
  }

  return (
    <Tabs value={route} onChange={handleChange}>
      {links.map(({ label, to, index }) => (
        <Tab key={index} component={Link} label={label} to={to} value={index} />
      ))}
    </Tabs>
  )
}

NavComponent.propTypes = {
  location: PropTypes.object,
}

export const Nav = withRouter(NavComponent)
