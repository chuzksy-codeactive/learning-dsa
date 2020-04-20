import axios from 'axios';
import { FETCH_BEGINNER } from './types';

export const fetchBeginner = () =>
  async (dispatch) => {
    const res = await axios.get('/api/beginners');

    dispatch({ type: FETCH_BEGINNER, payload: res.data });
  }

export const submitBeginner = (values, history) =>
  async (dispatch) => {
    const res = await axios.post('/api/beginners/challenges', values);

    history.push('/beginners');
    dispatch({ type: FETCH_BEGINNER, payload: res.data });
  }

