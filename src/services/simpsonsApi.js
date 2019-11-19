export const fetchSimpsonsQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(([quote]) => quote);
};
