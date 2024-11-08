import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RecPage from './pages/recPage';
import InsertPage from './pages/insertPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Landing from './pages/LandingPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Landing/>,
    children: [{
      path:"/create",
      element:<InsertPage/>
    }]
  },
  {
    path: "rec/:id",
    element:<RecPage/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

