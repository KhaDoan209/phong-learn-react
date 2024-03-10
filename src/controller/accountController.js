import { AccountService } from '../services/accountService';
import { customResponse } from '../utils/common';
export class AccountController {
   loginController = async (data) => {
      const accountService = new AccountService();
      const { username, password } = data;
      const result = await accountService.loginService(username, password);
      switch (result) {
         case 200:
            return customResponse(null, result, 'Đăng nhập thành công');
         case 401:
            return customResponse(null, result, 'Sai mật khẩu');
         case 404:
            return customResponse(null, result, 'Không tìm thấy tài khoản');
         default:
            break;
      }
   };

   registerController = async (data) => {
      const accountService = new AccountService();
      const { username, password, fullname, age } = data;
      const result = await accountService.registerService(
         username,
         password,
         fullname,
         age
      );
      switch (result) {
         case 201:
            return customResponse(null, result, 'Đăng kí thành công');
         case 401:
            return customResponse(null, result, 'Tên đăng nhập đã tồn tại');
         default:
            break;
      }
   };
}
