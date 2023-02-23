import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signup } from '../../APIs'

import classes from './Signup.module.css'
const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
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

    const result = await signup(formData)
    if (result) {
      alert('user id is created!')
      navigate('/login')
    } else {
      alert('Something went wrong')
    }
  }

  return (
    <div>
      <div className={classes.signup}>
        <form onSubmit={submitHandler}>
          <h2>Signup Form</h2>
          <div className={classes.input}>
            <label htmlFor="name">Name:</label>
            <input
              value={formData.name}
              onChange={changeHandler}
              id="name"
              type="text"
              name="name"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="email">Email:</label>
            <input
              value={formData.email}
              onChange={changeHandler}
              id="email"
              type="email"
              name="email"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="password">Password:</label>
            <input
              value={formData.password}
              onChange={changeHandler}
              id="password"
              type="password"
              name="password"
            />
          </div>
          <div className={classes.action}>
            <button className="btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
