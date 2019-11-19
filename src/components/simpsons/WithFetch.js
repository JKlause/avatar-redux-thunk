import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SimpsonsQuote from './SimpsonsQuote';
import More from '../quote/More';
import { getSimpsonsQuote, getSimpsonsLoading } from '../../selectors/simpsonsSelector';
import { fetchSimpsonQuote } from '../../actions/simpsonsActions';

function WithFetch({ quote, loading, more }) {

  useEffect(() => {
    more();
  }, []);

  if(loading) return <h1>Your Simpson Quote Is Loading</h1>;

  return (
    <>
      <SimpsonsQuote quote={quote} />
      <More more={more} />
    </>
  );
}

WithFetch.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    characterDirection: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  more: PropTypes.func.isRequired
};

const mapStateToProps = state  => ({
  quote: getSimpsonsQuote(state),
  loading: getSimpsonsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  more() {
    dispatch(fetchSimpsonQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithFetch);
