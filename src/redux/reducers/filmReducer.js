import { filmActions } from '../constants/filmActionTypes';

const initialState = {
  searchParams: null,
  historicalSearch: [],
  filmDetails: [],
};
const filmReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case filmActions.SEARCH:
      return {
        ...state,
        searchParams: payload,
      };

    case filmActions.HISTORICAL_SEARCH:
      return {
        ...state,
        historicalSearch: [...state.historicalSearch, payload],
      };

    case filmActions.FILM_DETAILS:
      return {
        ...state,
        filmDetails: payload,
      };
    default:
      return state;
  }
};

export default filmReducer;
