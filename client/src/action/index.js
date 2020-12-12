export const loginUser = data =>
{
  console.log(data);
  return{
    type : 'login',
    payload : data
  };
};