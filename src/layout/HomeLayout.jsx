import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarApp from '../components/Navbar';
const HomeLayout = () => {
   return (
      <div>
         <NavbarApp />
         <Outlet />
      </div>
   );
};

export default HomeLayout;
