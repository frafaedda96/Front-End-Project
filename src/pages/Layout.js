import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'; // Import Outlet for content rendering
import Home from './Home';

const Layout = () => {
  return (
    <>
        <Navbar />
        <main className="container mx-auto py-8">
            <Outlet /> {/* Outlet for dynamic content from routes */}
        </main>
    </>
  );
};

export default Layout;
