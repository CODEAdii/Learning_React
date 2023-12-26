/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Layout from './Layout.jsx'; // Import your Layout component
import Home from './components/Home/Home.jsx'; // Import your Home component
import About from './components/About/About.jsx'; // Import your About component
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import GitHub,{githubInfoLoader} from './components/GitHub/GitHub.jsx';


import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact_us', element: <Contact/> },
      { path: 'user/:userid', element: <User/> },
      { loader: githubInfoLoader,
        path: 'github', element: <GitHub/> }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
