import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../../APIs'

import classes from './NewPost.module.css'
const NewPost = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    heading: '',
    text: '',
    name: JSON.parse(localStorage.getItem('user')).existingUser.name,
  })

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const result = await addPost(formData)

    if (result) {
      alert('Post is been posted')
      navigate('/posts')
    } else {
      alert('Something went wrong.')
    }
  }

  return (
    <div className={classes.newpost}>
      <h2>New Post Upload Form</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="heading">Post Heading:</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="text">Post Body:</label>
          <textarea
            type="text"
            rows={10}
            id="text"
            name="text"
            value={formData.text}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button className="btn-primary">Post The Information</button>
        </div>
      </form>
    </div>
  )
}

export default NewPost
