import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import HomeLayout from './layout/HomeLayout';
const router = createBrowserRouter([
   {
      path: '/',
      element: <HomeLayout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/product',
            element: <Product />,
         },
      ],
   },
   {
      path: '/login',
      element: <Login />,
   },
]);
function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
