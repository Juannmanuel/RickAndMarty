import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Error from "./components/Error404/Error404";
import Form from "./components/Forms/Forms";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const EMAIL = "yo@g.com";
  const PASSWORD = "asd1234";

  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(access);
  //     access && navigate("/home");
  //   });
  // }
  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    const { data } = await axios(`${URL}?email=${email}&password=${password}`);
    const { access } = data;
    setAccess(access);
    access && navigate("/home");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // function onSearch(id) {
  //   if (id > 826)
  //     return window.alert("¡No hay personajes con este ID! Solo hay 826");

  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       console.log(data);
  //       if (data.name) {
  //         const isDuplicate = characters.some(
  //           (character) => character.id === data.id
  //         );
  //         if (isDuplicate) {
  //           window.alert("¡El personaje ya se mostró!");
  //         } else {
  //           setCharacters((oldChars) => [...oldChars, data]);
  //         }
  //       }
  //     }
  //   );
  //  }
  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (!data.name) throw new Error("Personaje no encontrado");
      const isDuplicate = characters.some(
        (character) => character.id === data.id
      );
      if (isDuplicate) throw new Error("Personaje ya mostrado");
      setCharacters((oldCharas) => [...oldCharas, data]);
    } catch (error) {
       window.alert(error.message);
    }
  };

  function onClose(id) {
    const charactersFilter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFilter);
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <div></div>
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path=":Error404" element={<Error />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
      </Routes>
    </div>
  );
}

export default App;
