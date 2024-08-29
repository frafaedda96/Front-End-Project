import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import Form from './pages/Form';
import Login from './pages/Login'
import Layout from './pages/Layout';
import Register from './pages/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
</React.StrictMode>
  );


reportWebVitals();
