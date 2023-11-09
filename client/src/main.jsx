import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './main.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import SinglePost from './pages/SinglePost.jsx'

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
      }
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )