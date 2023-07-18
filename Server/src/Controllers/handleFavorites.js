let myFavorites = [];

const postFav = (req, res) => {
  let character = req.body;
  myFavorites.push(character);

  return res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.body;
  const myFavorites = myFavorites.filter((element) => element.id !== +id);
  return res.json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}