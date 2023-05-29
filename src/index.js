import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './components/About';
import { Temp } from './components/inc/temp';
import { Home } from './components/Home';
import { Card } from './components/Card';
import { Error } from './components/inc/error';
import { Projects } from './components/Projects';


const routes = createBrowserRouter([
  
  {
    path:'/',
    element: <Temp/>,
    errorElement: <Error/>,
    children:[
      {
        index: true,
        element:<Home />
      },
      {
        path: 'about',
        element:<About/>
      },
      {
        path: 'card',
        element:<Card/>
      },
      {
        path: 'projects',
        element:<Projects/>
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

