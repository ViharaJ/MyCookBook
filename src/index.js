import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RecPage from './pages/recPage';
import InsertPage from './pages/insertPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Landing from './pages/LandingPage'
import Root from './pages/Root';

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
      path: "/rec",
      element:<RecPage/>
    },
    {
      path:"/create",
      element:<InsertPage/>
    }]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

