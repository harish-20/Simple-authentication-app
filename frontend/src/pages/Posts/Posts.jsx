import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../APIs'

import classes from './Post.module.css'
const Posts = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const data = await getAllPosts()

    if (Array.isArray(data)) {
      setPosts(data.reverse())
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className={classes['posts-container']}>
      <h2>Recent Posts</h2>
      {!posts.length && <h4>No Posts There</h4>}
      {posts.map((post) => (
        <div key={post._id} className={classes.post}>
          <h4>{post.name}</h4>
          <h3>{post.heading}</h3>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
