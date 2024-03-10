import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { AccountController } from '../controller/accountController';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
   const navigate = useOutletContext();
   const [loginData, setLoginData] = useState({
      username: '',
      password: '',
   });
   const handleChangeInput = (event) => {
      const { name, value } = event.target;
      setLoginData({ ...loginData, [name]: value });
   };
   const handleLogin = async () => {
      if (loginData.username == '' || loginData.password == '') {
         toast.warning('Vui lòng nhập đầy đủ thông tin', {
            position: 'top-center',
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
            autoClose: 500,
         });
      } else {
         const accountController = new AccountController();
         const { status, message } = await accountController.loginController(
            loginData
         );
         if (status === 200) {
            toast.success(message, {
               position: 'top-center',
               pauseOnHover: false,
               draggable: true,
               theme: 'dark',
               autoClose: 500,
            });
            setTimeout(() => {
               navigate('/');
            }, 1000);
         } else {
            toast.error(message, {
               position: 'top-center',
               pauseOnHover: false,
               draggable: true,
               theme: 'dark',
               autoClose: 500,
            });
         }
      }
   };

   return (
      <div className='w-8/12 mx-auto flex flex-col justify-center h-screen'>
         <h1 className='text-5xl font-bold text-center'>Login</h1>
         <form>
            <div className='my-2'>
               <Input
                  className='mb-5'
                  name='username'
                  type='email'
                  label='Email'
                  radius='sm'
                  variant='underlined'
                  placeholder='Email'
                  onChange={handleChangeInput}
               />
               <Input
                  name='password'
                  type='password'
                  label='Password'
                  radius='sm'
                  variant='underlined'
                  placeholder='Password'
                  onChange={handleChangeInput}
               />
            </div>
            <Button
               onClick={handleLogin}
               radius='sm'
               variant='shadow'
               className='mt-5 w-full'
            >
               <p className='font-bold text-black'>Login</p>
            </Button>
         </form>
      </div>
   );
};

export default Login;
