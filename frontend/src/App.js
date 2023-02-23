import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import NewPost from './pages/NewPost/NewPost'
import Posts from './pages/Posts/Posts'
import Signup from './pages/Signup/Signup'

import './App.css'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/newPost" element={<NewPost />} />
      </Routes>
    </>
  )
}

export default App
