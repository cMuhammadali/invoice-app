import axiosInstance from "../ApiConfig/AxiosInstance";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    localStorage.setItem("id", response.data.user.id);
    return response.data;
  } catch (error) {
    throw error;
  }
};
