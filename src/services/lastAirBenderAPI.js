
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




// export const callAp = (searchQuery, page = 1) => { 


//   let query = searchQuery;

//   if(searchQuery !== 'random') {
//     query = `?name=${searchQuery}&page=${page}`; 
//   }

//   if(searchQuery === undefined) {
//     query = `?page=${page}`;
//   }

//   if((/^[a-f\d]{24}$/).test(searchQuery)) {
//     query = searchQuery;
//   }

//   const url = `https://last-airbender-api.herokuapp.com/api/v1/characters/${query}`;

//   return fetch(url)
//     .then(res => res.json())
//     .catch(error => {
//       console.log(error);
//     }); 
// };
