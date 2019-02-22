import axios from 'axios';
 debugger;
export function getPlayers() {   
  return axios.get('https://football-players-b31f2.firebaseio.com/players.json')
  .then(response => response.players);
}

