import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RecPage from './recPage';
import InsertPage from './insertPage';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Landing from './LandingPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Landing/>}/>
        <Route path ="create" element={<InsertPage/>}/>
        <Route path ="rec/:id" element={<RecPage/>}/>
      </Routes>
     
    </BrowserRouter>
    
  </React.StrictMode>
);

