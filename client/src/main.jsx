import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './main.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import SinglePost from './pages/SinglePost.jsx'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost.jsx'

const router = createBrowserRouter([
    {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/me',
        element: <Profile />
      }, {
        path: '/profiles/:username',
        element: <Profile />
      }, {
        path: '/posts/:postId',
        element: <SinglePost />
      }, {
        path: '/create-post',
        element: <CreatePost />
      }, {
        path: '/edit-post/:postId',
        element: <EditPost />
      }
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )