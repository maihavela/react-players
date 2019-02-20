import { createSelector } from 'reselect';
import moment from 'moment';

const playerSelector = (state) => state.players.list.map( player => {
  return {
    name: player.name,
    position: player.position,
    nationality: player.nationality,
    age: player.dateBirth.diff(moment(), 'years') 
    //age: moment().diff(player.dateBirth, 'years')
    //birthday.diff(moment(), 'years') 
  }
});

export const playersSelector = createSelector(
  playerSelector,
  (players) => players.filter(player => {
    const namePlayerCondition = player.name.toLowerCase();
    const PositionPlayerCondition = !player.position;
    const agePlayerCondition = player.age;

    return namePlayerCondition && PositionPlayerCondition && agePlayerCondition;
  })
); 
