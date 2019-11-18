
/* eslint-disable no-console */
export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/')
    .then(res => res.json())
    .then(characters => characters.map(({ _id, name, photoUrl })=> ({
      _id,
      name,
      photoUrl: photoUrl || 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441'
    })));
};

export const getCharacter = (id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};
