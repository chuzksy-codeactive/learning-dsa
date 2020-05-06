import axios from 'axios';
import {FETCHING_BEGINNER, FETCH_BEGINNER, CREATING_BEGINNER } from './types';

export const fetchingBeginner = () => ({
  type: FETCHING_BEGINNER
});

export const fetchBeginnerSuccess = (payload) => ({
  type: FETCH_BEGINNER,
  payload
});

export const fetchBeginner = () =>
  async (dispatch) => {
    dispatch(fetchingBeginner());
    const res = await axios.get('/api/beginners/challenges');

    dispatch({ type: FETCH_BEGINNER, payload: res.data });
  }

export const creatingBeginnerChallenge = () => ({
  type: CREATING_BEGINNER
})

export const submitBeginner = (values, history) =>
  async (dispatch) => {
    dispatch(creatingBeginnerChallenge());
    const res = await axios.post('/api/beginners/challenges', values);

    history.push('/beginner');
    dispatch({ type: FETCH_BEGINNER, payload: res.data });
  }
