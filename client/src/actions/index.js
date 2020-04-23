import axios from 'axios';
import { FETCH_BEGINNER, CREATING_BEGINNER_CHALLENGE } from './types';

export const fetchBeginner = () =>
  async (dispatch) => {
    const res = await axios.get('/api/beginners/challenges');

    dispatch({ type: FETCH_BEGINNER, payload: res.data });
  }

export const creatingBeginnerChallenge = () => ({
  type: CREATING_BEGINNER_CHALLENGE
})

export const submitBeginner = (values, history) =>
  async (dispatch) => {
    dispatch(creatingBeginnerChallenge());
    const res = await axios.post('/api/beginners/challenges', values);

    history.push('/beginners');
    dispatch({ type: FETCH_BEGINNER, payload: res.data });
  }

