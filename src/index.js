import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RecPage from './pages/recPage';
import InsertPage from './pages/insertPage';
import TagPage from './pages/tagPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Landing from './pages/LandingPage'
import Root from './pages/Root';
import Login from './pages/loginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>,
    children: [{
        path:"/",
        element:<Landing/>
      }, 
      {
        path:"/create",
        element:<InsertPage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/recipes/:tag",
        element:<TagPage/>
      }]
  },
  {
    path:"/rec/:id",
    element:<RecPage/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

