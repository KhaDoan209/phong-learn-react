export const customResponse = (data, status, message) => {
   const response = {
      data,
      status,
      message,
   };
   return response;
};
