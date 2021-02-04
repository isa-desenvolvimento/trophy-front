import axios from "axios";
import { BASE_URL } from "@/util/constants";

export const getCoins = userId => {
  axios.post(`${BASE_URL}user/${userId}/sum_coins`).then(response => {
    return response.data;
  });
};

export const getDeaths = userId => {
  axios.post(`${BASE_URL}death/${userId}/sum_deaths`).then(response => {
    return response.data;
  });
};

export const getKilledMonster = userId => {
  axios
    .post(`${BASE_URL}killed_monster/${userId}/sum_monsters`)
    .then(response => {
      return response.data;
    });
};

export const getRanking = userId => {
  axios.post(`${BASE_URL}trophy/${userId}/rank`).then(response => {
    return response.data;
  });
};
