import { getQuote } from '../services/ronSwansonApi';

export const FETCH_QUOTE_LOADING = 'FETCH_QUOTE_LOADING';
export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTE_DONE = 'FETCH_QUOTE_DONE';

export const fetchQuote = () => ({
  type: FETCH_QUOTE,
  pendingType: FETCH_QUOTE_LOADING,
  fulfilledType: FETCH_QUOTE_DONE,
  payload: getQuote()
});
