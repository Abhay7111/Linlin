import { StrictMode } from 'react';
import {ReactDOM } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './Pages/Index.jsx';

const router =createBrowserRouter([
  {path:'/', element:<Index/>},
  {path:'*', element:'Page not found'},
])

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
