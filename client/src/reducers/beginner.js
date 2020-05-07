import {
  FETCH_BEGINNER,
  FETCHING_BEGINNER,
  CREATING_BEGINNER,
} from './../actions/types';

const initialState = {
  beginner: [],
  loading: false,
}

const beginnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BEGINNER:
      return { ...state, loading: true }
    case FETCH_BEGINNER:
      return { ...state, beginner: action.payload, loading: false };
    case CREATING_BEGINNER:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default beginnerReducer;
