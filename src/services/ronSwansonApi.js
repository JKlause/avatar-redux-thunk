export const getQuote = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => res.json());
};

