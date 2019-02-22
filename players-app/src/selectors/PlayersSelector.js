import { createSelector } from 'reselect';
/* import { getAge } from '../utils';

const playerSelector = state => state.players.list.map( player => {
  return {
    name: player.name,
    position: player.position,
    nationality: player.nationality,
    age: getAge(player.dateOfBirth)
  }
});

const filterSelector = state => state.filters;

export const playerListsSelector = createSelector(
  playerSelector,
  filterSelector,
  (players, filters) => players.filter(player => {
    const namePlayerCondition = !filters.namePlayer || player.name.toLowerCase().includes(filters.namePlayer.toLowerCase())
    const PositionPlayerCondition = !filters.positionPlayer || player.position === filters.positionPlayer;
    const agePlayerCondition = !filters.agePlayer || player.age === Number(filters.agePlayer);

    return namePlayerCondition && PositionPlayerCondition && agePlayerCondition;
  })
); */

const name = (player) => player.name;
const position = (player) => player.position;
const nationality = (player) => player.nationality;
const age = (player) => player.age;

export const playersSelector = createSelector(
  [name, position, nationality, age],
  (name, position, nationality, age) => ({ name, position, nationality, age })
);
