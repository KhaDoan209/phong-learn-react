import { Button } from '@nextui-org/react';
import React from 'react';
import { loginService } from '../services/accountService';
const Login = () => {
   return (
      <div>
         <Button
            onClick={loginService}
            radius='sm'
            className='bg-green-700'
         >
            <p className='font-bold text-white'>Login</p>
         </Button>
      </div>
   );
};

export default Login;
