import { fetchSimpsonsQuote } from '../services/simpsonsApi';

export const FETCH_SIMPSONS_LOADING = 'FETCH_SIMPSONS_LOADING';
export const FETCH_SIMPSONS = 'FETCH_SIMPSONS';
export const FETCH_SIMPSONS_DONE = 'FETCH_SIMPSONS_DONE';

export const fetchSimpsonQuote = () => ({
  type: FETCH_SIMPSONS,
  pendingType: FETCH_SIMPSONS_LOADING,
  fulfilledType: FETCH_SIMPSONS_DONE,
  payload: fetchSimpsonsQuote()
});
