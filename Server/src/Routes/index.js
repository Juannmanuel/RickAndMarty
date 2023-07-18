const { getCharById } = require("../Controllers/getCharById");
const { postFav, deleteFav } = require("../Controllers/handleFavorites");
const { loguin } = require("../Controllers/loguin");
const routes = require("express").Router();

routes.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

routes.get("/login", (req, res) => {
  loguin(req, res);
});

routes.post("/fav", (req, res) => {
  postFav(req, res);
});
routes.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = {
  routes,
};
