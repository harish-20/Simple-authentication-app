import axios from 'axios'

const api = new axios.create({ baseURL: 'http://localhost:8080/' })

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return config
    }
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    alert(error)
    return Promise.reject(error)
  },
)

export const login = async (userInfo) => {
  const result = await api
    .post('/login', userInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  if (result.token) {
    localStorage.setItem('token', result.token)
    localStorage.setItem('user', JSON.stringify(result))
  } else {
    alert(result)
  }

  return result
}

export const signup = async (userInfo) => {
  const result = await api
    .post('/signup', userInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return result
}

export const getAllPosts = async () => {
  const result = await api
    .get('/posts')
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return result
}

export const addPost = async (postInfo) => {
  const result = await api
    .post('/posts', postInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return result
}
