import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { AccountController } from '../controller/accountController';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
const Register = () => {
   const navigate = useOutletContext();
   const [registerData, setRegisterData] = useState({
      username: '',
      password: '',
      fullname: '',
      age: '',
   });
   const handleChangeInput = (event) => {
      const { name, value } = event.target;
      setRegisterData({ ...registerData, [name]: value });
   };
   const handleRegister = async () => {
      if (
         registerData.username == '' ||
         registerData.password == '' ||
         registerData.fullname == '' ||
         registerData.age == ''
      ) {
         toast.warning('Vui lòng nhập đầy đủ thông tin', {
            position: 'top-center',
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
            autoClose: 500,
         });
      } else {
         const accountController = new AccountController();
         const { status, message } = await accountController.registerController(
            registerData
         );
         if (status === 201) {
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
         <h1 className='text-5xl font-bold text-center'>Register</h1>
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
                  className='mb-5'
                  name='password'
                  type='text'
                  label='Password'
                  radius='sm'
                  variant='underlined'
                  placeholder='Password'
                  onChange={handleChangeInput}
               />
               <Input
                  className='mb-5'
                  name='fullname'
                  type='text'
                  label='Full Name'
                  radius='sm'
                  variant='underlined'
                  placeholder='Your full name'
                  onChange={handleChangeInput}
               />
               <Input
                  name='age'
                  type='text'
                  label='Age'
                  radius='sm'
                  variant='underlined'
                  placeholder='Age'
                  onChange={handleChangeInput}
               />
            </div>
            <Button
               onClick={handleRegister}
               radius='sm'
               variant='shadow'
               className='mt-5 w-full'
            >
               <p className='font-bold text-black'>Register</p>
            </Button>
         </form>
      </div>
   );
};

export default Register;
