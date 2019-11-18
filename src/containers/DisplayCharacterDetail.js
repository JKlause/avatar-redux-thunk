import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import CharacterDetail from '../components/CharacterDetail';
import { fetchCharacter } from '../actions/characterActions';
import { getCharacter, getCharactersLoading } from '../selectors/characterSelectors';

const DisplayCharacterDetail = ({ match }) => {
  const character = useSelector(state => getCharacter(state, match.params.id));
  const loading = useSelector(getCharactersLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(match.params.id));
  }, []);
  
  if(loading) return <h1>Gathering...</h1>;
  if(!character) return <h1>No Card Found</h1>;

  return (
    <CharacterDetail {...character} />
  );
};

DisplayCharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DisplayCharacterDetail;
