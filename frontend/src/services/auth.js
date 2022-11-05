import api from "./api";
import jwt from "jwt-decode";

export const TOKEN_KEY = "token";

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const autoLogout = (token) => {
  const tokenDecoded = jwt(token);
  console.log(tokenDecoded);
  const expirationDate = tokenDecoded.exp * 1000;
  console.log(expirationDate);
  setTimeout(() => {
    console.log("123");
    localStorage.removeItem(TOKEN_KEY);
  }, expirationDate);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const signIn = async (email, password) => {
  console.log(email, password);
  try {
    const response = await api.post("/singin", { email, password });
    const { token } = response.data.data;
    localStorage.setItem(TOKEN_KEY, response.data.data.token);
    autoLogout(token);
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
