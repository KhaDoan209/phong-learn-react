import axios from 'axios';

export class AccountService {
   constructor() {}

   getListUserService = async () => {
      const result = await axios.get('http://localhost:3000/users');
      return result.data;
   };

   loginService = async (username, password) => {
      const listUser = await this.getListUserService();
      const result = listUser.map((item) => {
         if (item.username === username) {
            if (item.password === password) {
               return 200;
            } else {
               return 401;
            }
         } else {
            return 404;
         }
      });
      return result[0];
   };

   registerService = async (username, password, fullname, age) => {
      const listUser = await this.getListUserService();
      let isExist = false;
      listUser.map((item) => {
         if (item.username === username) {
            isExist = true;
            return 401;
         }
      });
      if (!isExist) {
         const newAccount = {
            username,
            password,
            fullname,
            age,
         };
         await axios.post('http://localhost:3000/users', newAccount);
         return 201;
      }
   };
}
