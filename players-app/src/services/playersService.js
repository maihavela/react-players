import axios from 'axios';
import { PLAYERS_API  } from './../constants/constants';

export function getPlayers() {
  return axios(PLAYERS_API)
    .then(response => response.players);
}