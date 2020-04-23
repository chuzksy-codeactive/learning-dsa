import { FETCH_BEGINNER, CREATING_BEGINNER_CHALLENGE } from './../actions/types';

const beginnerReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BEGINNER:
      return action.payload;
    case CREATING_BEGINNER_CHALLENGE:
      return true;
    default:
      return state;
  }
};

export default beginnerReducer;
