import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.header}>
      <h1>
        <Link to="/">Authentication With JWT</Link>
      </h1>
      <div className={classes.links}>
        <NavLink
          to="/posts"
          className={(active) =>
            active.isActive ? classes.active : classes.link
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/newpost"
          className={(active) =>
            active.isActive ? classes.active : classes.link
          }
        >
          New Post Upload
        </NavLink>
      </div>
    </div>
  )
}

export default Header
