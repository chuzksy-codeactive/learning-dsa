import { FETCH_BEGINNER } from './../actions/types';

const beginnerReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BEGINNER:
      return action.payload;
    default:
      return state
  }
};

export default beginnerReducer;
