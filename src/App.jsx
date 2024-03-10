import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import HomeLayout from './layout/HomeLayout';
import FormLayout from './layout/FormLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
   {
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
      element: <FormLayout />,
      children: [
         {
            path: '/login',
            element: <Login />,
         },
         {
            path: '/register',
            element: <Register />,
         },
      ],
   },
]);
function App() {
   return (
      <>
         <RouterProvider router={router} />
         <ToastContainer />
      </>
   );
}

export default App;
