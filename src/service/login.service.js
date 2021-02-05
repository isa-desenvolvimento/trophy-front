import axios from "axios";
import { BASE_URL } from "@/util/constants";

export const auth = user => {
  axios.post(`${BASE_URL}auth/auth`, user).then(response => {
    return response.data;
  });
};
