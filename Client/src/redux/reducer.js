import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    case FILTER:
      const allCharacterFilter = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharacterFilter,
      };
    case ORDER:
      const allCharacterCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharacterCopy.sort((a, b) => a.id - b.id)
            : allCharacterCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
