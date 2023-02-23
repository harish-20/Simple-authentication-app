import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Home.module.css'
const Home = () => {
  return (
    <div className={classes.home}>
      <h1>To Fetch All The Post From Other Users Login Or Signup</h1>
      <Link to="/login" className="btn-primary">
        Login
      </Link>
    </div>
  )
}

export default Home
