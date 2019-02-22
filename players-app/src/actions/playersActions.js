import { getPlayers } from './../services/playersService';
export const FETCH_PLAYERS_BEGIN = 'FETCH_PLAYERS_BEGIN';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';


export function fetchPlayers() {
  return dispatch => {
    dispatch(fetchPlayersBegin());
    return getPlayers()
      .then(success => dispatch(fetchPlayersSuccess(success)))
      .catch(err => dispatch(fetchPlayersFailure(err)));
  };

  function fetchPlayersBegin() {
    return {
      type: FETCH_PLAYERS_BEGIN
    };
  }

  function fetchPlayersSuccess(players) {
    return {
      type: FETCH_PLAYERS_SUCCESS,
      payload: { players }
    };
  }

  function fetchPlayersFailure(error) {
    return {
      type: FETCH_PLAYERS_FAILURE,
      payload: { error }
    };
  }
}
