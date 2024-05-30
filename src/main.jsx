import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ComoJogar from './components/ComoJogar.jsx'
import Temas from './components/Temas.jsx'

const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'comojogar', element:<ComoJogar/>},
  {path:'temas', element:<Temas/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router={router}/>
  </React.StrictMode>,
)
