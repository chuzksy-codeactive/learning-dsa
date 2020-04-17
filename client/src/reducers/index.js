import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import beginnerReducer from './beginner';

const reducers = combineReducers({
  beginners: beginnerReducer,
  form: reduxForm
});

export default reducers;
