const baseURL = "https://trophy-api.herokuapp.com";
//const baseURL = process.env.API;
import axios from "axios";

function getHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: `Bearer ${token}`
    })
  };
}

async function request(method, url, data) {
  const options = {
    method,
    headers: getHeaders(),
    ...(method !== "get" && {
      data: JSON.stringify(data)
    })
  };
  return await axios(baseURL + url, options);
  //return await response.json();
}

export { request as default, request, getHeaders };
