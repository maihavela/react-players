export const FETCH_PLAYERS_BEGIN = 'FETCH_PLAYERS_BEGIN';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';

export const fetchPlayerssBegin = () => ({
  type: FETCH_PLAYERS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PLAYERS_SUCCESS,
  payload: { players }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PLAYERS_FAILURE,
  payload: { error }
});