import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FormLayout = () => {
   const navigate = useNavigate();
   return (
      <div className='flex'>
         <div className='w-3/5'>
            <img
               className='w-full h-screen object-cover'
               src='https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
         </div>
         <div className='w-2/5'>
            <Outlet context={navigate} />
         </div>
      </div>
   );
};

export default FormLayout;
