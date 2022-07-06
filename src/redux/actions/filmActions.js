import axios from 'axios';
import { filmActions } from '../constants/filmActionTypes';

const { REACT_APP_URL } = process.env;

export const searchFilm = (data) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${REACT_APP_URL}/films/?search=${data.searchParams}`
    );
    dispatch({ type: filmActions.FILM_DETAILS, payload: res.data });
    dispatch({ type: filmActions.SEARCH, payload: data.searchParams });
    return res;
  } catch (err) {
    Promise.reject(err?.response);
    return err;
  }
};

export const addHistoricalSearch = (data) => (dispatch) => {
  return dispatch({ type: filmActions.HISTORICAL_SEARCH, payload: data });
};
