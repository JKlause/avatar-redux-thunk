import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <>
    <h1>Your Ron Swanson Quote</h1>
    <h2>{quote}</h2>
  </>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired
};

export default Quote;
