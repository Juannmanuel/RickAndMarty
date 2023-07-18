const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

// const getCharById = (req, res) => {
//   const { id } = req.params;
//   axios(`${URL}/${id}`)
//     .then((response) => response.data)
//     .then(({ id, name, status, origin, image, gender, species }) => {
//       if (name) {
//         const character = {
//           id,
//           name,
//           status,
//           origin,
//           image,
//           gender,
//           species,
//         };
//         return res.status(200).json(character);
//       }
//       return res.status(404).send("Not found");
//     })
//     .catch((error) => res.status(500).send(error.message));
// };
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    if (!data.name) throw new Error("Not found");
    
    const character = {
      id: data.id,
      name: data.name,
      status: data.status,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      species: data.species,
    };
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
// const getCharById = async (req, res) => {
//   const { id } = req.params;
//   const { data } = await axios(URL + id);
//   try {
//     if (data.name) {
//       const character = {
//         id: data.id,
//         name: data.name,
//         status: data.status,
//         origin: data.origin,
//         image: data.image,
//         gender: data.gender,
//         species: data.species,
//       };
//       return res.status(200).json(character);
//     }
//     return res.status(400).send("Not found");
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

module.exports = {
  getCharById,
};
