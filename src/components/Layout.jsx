import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Frags/Navbar';
import Fooder from './Frags/Fooder';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
   <Navbar/>
      <main className="flex-grow px-6 py-4">
        <Outlet />
      </main>
      <Fooder/>
    </div>
  );
};

export default Layout;
