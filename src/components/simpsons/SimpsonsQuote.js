import React from 'react';
import PropTypes from 'prop-types';

const SimpsonsQuote = ({ quote }) => (
  <figure>
    <img src={quote.image} alt={quote.character} />
    <figcaption>{quote.character}</figcaption>
    <p>{quote.quote}</p>
  </figure>
);

SimpsonsQuote.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    characterDirection: PropTypes.string.isRequired,
  })
};

export default SimpsonsQuote;
