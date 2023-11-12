import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First.jsx'
import Second from './Second.jsx'
import Third from './Third.jsx'
import Leaderboard from './Leaderboard.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />},
  { path: '/first', element: <First />},
  { path: '/second', element: <Second />},
  { path: '/third', element: <Third />},
  { path: '/leaderboard', element: <Leaderboard />},
]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
