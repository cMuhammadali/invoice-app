import axiosInstance from '../ApiConfig/AxiosInstance';

export const login = async (email, password) => {
  const response = await axiosInstance.post('/login', {
    email,
    password
  });
  return response.data;
};