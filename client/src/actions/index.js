import axios from 'axios';
import { FETCH_BEGINNER } from './types';

export const fetchBeginner = () => {
  async (dispatch) => {
    const res = await axios.get('/api/beginner');

    dispatch({ type: FETCH_BEGINNER, payload: res.data });
  }
};
