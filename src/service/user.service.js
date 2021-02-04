import axios from "axios";
import { BASE_URL } from "@/util/constants";

export const getUser = id => {
  axios.get(`${BASE_URL}user/${id}`).then(response => {
    return response.data;
  });
};

export const postUser = user => {
  axios.post(`${BASE_URL}user/`, user).then(response => {
    return response.data;
  });
};

export const deleteUser = id => {
  axios.post(`${BASE_URL}user/${id}`).then(response => {
    return response.data;
  });
};
