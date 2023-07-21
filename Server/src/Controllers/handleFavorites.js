let myFavorites = [];

const postFav = (req, res) => {
  let character = req.body;
  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  let { id } = req.body;
  console.log(id);
  myFavorites = myFavorites.filter((element) => element.id !== +id);
  return res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
