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
    default:
      return state;
  }
};

export default filmReducer;
