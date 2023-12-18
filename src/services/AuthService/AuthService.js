import axiosInstance from "../ApiConfig/AxiosInstance";

export const login = async (email, password) => {
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
