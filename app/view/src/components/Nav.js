import React, { useState } from 'react'
import PropTypes from 'prop-types'

// routing
import { Link, withRouter } from 'react-router-dom'

// ui
import { Tabs, Tab } from '@material-ui/core'

// =====================================
//  BASE
// =====================================

export const NavBase = ({ location: { pathname } }) => {
  const [links] = useState([['/', 'Products'], ['/categories', 'Categories']])
  const [activeTab, setActiveTab] = useState(
    links.findIndex(([path]) => path === pathname)
  )

  return (
    <Tabs
      value={activeTab === -1 ? false : activeTab}
      onChange={(e, tab) => setActiveTab(tab)}
    >
      {links.map(([path, label], i) => (
        <Tab component={Link} key={i} value={i} label={label} to={path} />
      ))}
    </Tabs>
  )
}

NavBase.propTypes = { location: PropTypes.object }

// =====================================
//  WRAPPINGS
// =====================================

export const Nav = withRouter(NavBase)
