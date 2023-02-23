import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { login } from '../../APIs'

import classes from './Login.module.css'
const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    for (const key in formData) {
      if (formData[key].trim() === '') {
        alert('Enter a valid input')
        return
      }
    }
    const result = await login(formData)
    if (result) {
      alert('login successfull!')
      navigate('/posts')
    } else {
      alert('Something went wrong.')
    }
  }
  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler}>
        <h2>Login Form</h2>
        <div className={classes.input}>
          <label htmlFor="email">Email:</label>
          <input
            value={formData.email}
            onChange={changeHandler}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="password">Password:</label>
          <input
            value={formData.password}
            onChange={changeHandler}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className={classes.actions}>
          <Link to="/signup" className="btn-secondary">
            Signup
          </Link>
          <button className="btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
