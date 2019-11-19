import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quote from '../components/quote/Quote';
import More from '../components/quote/More';
import { getQuote, getQuoteLoading } from '../selectors/swansonSelectors';
import { fetchQuote } from '../actions/swansonActions';

function SwansonQuotes({ quote, loading, more }) {

  useEffect(() => {
    more();
  }, []);

  if(loading) return <h1>Your Swanson Quote Is Loading</h1>;

  return (
    <>
      <Quote quote={quote} />
      <More more={more} />
    </>
  );
}

SwansonQuotes.propTypes = {
  quote: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  more: PropTypes.func.isRequired
};

const mapStateToProps = state  => ({
  quote: getQuote(state),
  loading: getQuoteLoading(state)
});

const mapDispatchToProps = dispatch => ({
  more() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwansonQuotes);
