import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul className={styles.Characters}>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
