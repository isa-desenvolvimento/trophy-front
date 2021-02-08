//import decode from "jwt-decode";
import request from "./request";

export const signIn = async user => {
  const response = await request("post", "/login", user);
  if (response.status === 200) {
    localStorage.setItem("token", response.data.jti);
    return response.data;
  }
};

export const signOut = () => {
  localStorage.clear();
};

export const isSignedIn = () => {
  return localStorage.getItem("token") || false;
};
