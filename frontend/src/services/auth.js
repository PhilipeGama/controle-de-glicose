import api from "./api";
import jwt_decode from "jwt-decode";

export const TOKEN_KEY = "token";

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const autoLogout = () => {
  const decoded = jwt_decode(getToken());

  if (new Date(decoded.exp * 1000) < Date.now()) {
    logout();
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const signIn = async (email, password) => {
  try {
    const response = await api.post("/singin", { email, password });
    localStorage.setItem(TOKEN_KEY, response.data.data.token);
    return true;
  } catch (error) {
    return false;
  }
};

export const signUp = async (name, email, password) => {
  try {
    await api.post("/signup", { name, email, password });
  } catch (error) {
    return false;
  }
};
