import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/Characters';
import { getCharacters, getCharactersLoading } from '../selectors/characterSelectors';
import { fetchCharacters } from '../actions/characterActions';

function AllCharacters({ characters, loading, fetchCharacters }) {
  useEffect(()=> {
    fetchCharacters();
  }, []);

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
  fetchCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
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
