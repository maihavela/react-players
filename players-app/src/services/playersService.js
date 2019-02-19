import axios from 'axios';
import { PLAYERS_API  } from './../constants/constants';

export function getPlayers() {
  return axios(API_URL)
    .then(response => response.data);
}