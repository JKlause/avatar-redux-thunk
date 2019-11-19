import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/Characters';
import { getCharacters, getCharactersLoading, getCharactersError } from '../selectors/characterSelectors';
import { fetchCharacters } from '../actions/characterActions';

function AllCharacters({ characters, loading, error, fetchCharacters }) {

  useEffect(()=> {
    fetchCharacters();
  }, []);

  if(error !== '') return <h1>{error}</h1>;

  if(loading) return <h1>Loading...</h1>;

  return (
    <Characters characters={characters} />
  );
}


AllCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
