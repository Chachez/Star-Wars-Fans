import api from '../../utils/authGuard/api';
import { filmActions } from '../constants/filmActionTypes';

export const searchFilm = (data) => async (dispatch) => {
  try {
    const res = await api.get(`/films/?search=${data.searchParams}`);
    dispatch({ type: filmActions.FILM_DETAILS, payload: res.data });
    dispatch({ type: filmActions.SEARCH, payload: data.searchParams });

    return res;
  } catch (err) {
    console.log(err.message);
  }
};

export const addHistoricalSearch = (data) => (dispatch) => {
  return dispatch({ type: filmActions.HISTORICAL_SEARCH, payload: data });
};
