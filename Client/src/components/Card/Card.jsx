import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";

function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  id,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, status, species, gender, origin, image, id });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      <button onClick={handleFavorite}>{isFav ? "💚" : "🤍"}</button>
      <button onClick={() => onClose(id)}>X</button>
      <h2>Nombre: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Especie: {species}</h2>
      <h2>Género: {gender}</h2>
      <h2>Origen: {origin}</h2>
      <NavLink to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </NavLink>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
