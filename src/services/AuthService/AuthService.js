import axiosInstance from "../ApiConfig/AxiosInstance";

export const login = async (email, password) => {
  console.log('email', email);
  console.log('password', password);
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    console.log('login =>', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
