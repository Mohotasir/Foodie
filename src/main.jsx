import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Meal from './components/Meal.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
    children :[
      {
        path:"/",
        element:<Hero></Hero>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },{
        path: "/meal",
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<Meal></Meal>
      }
    ]
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
