import api from "./api";

export const TOKEN_KEY = "token";

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const signIn = async (email, password) => {
  try {
    const response = await api.post("/singin", { email, password });
    localStorage.setItem(TOKEN_KEY, response.data.data.token);
    //return redirect("/");
  } catch (error) {
    return false;
  }
};
