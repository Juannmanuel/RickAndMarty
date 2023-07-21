import Card from "../Card/Card";
import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import { useDispatch } from "react-redux";

const Favorites = (props) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Acendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option  value="Male">Male</option>
        <option  value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option  value="unknown">Unknown</option>
      </select>
      {props.myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin}
            image={fav.image}
            onClose={props.onClose}
            id={fav.id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
