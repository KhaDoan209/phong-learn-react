import axios from 'axios';

export const loginService = async (username, password) => {
   const listAccount = await axios.get('http://localhost:3000/users');
   console.log(listAccount);
};
