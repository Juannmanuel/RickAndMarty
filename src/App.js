import './App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import axios from "axios"
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Error from './components/Error404/Error404';
import Form from './components/Forms/Forms';

function App() {

const navigate = useNavigate();  
const location = useLocation();
const [characters, setCharacters] = useState([])


const [access,setAccess] = useState(false);
const EMAIL = "yo@g.com"
const PASSWORD = "asd1234"

function login (userData) {
if(userData.password === PASSWORD && userData.email === EMAIL){
  setAccess(true);
  navigate("/home")
};
};
useEffect(() => {
  !access && navigate('/');
}, [access]);

function onSearch(id) {
   
      if(id > 826) return window.alert("¡No hay personajes con este ID! Solo hay 826")
  
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            const isDuplicate = characters.some(
              (character) => character.id === data.id
            );
            if (isDuplicate) {
              window.alert("¡El personaje ya se mostró!");
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          }
        }
      );
    }
    
function onClose (id) {

   const charactersFilter = characters.filter(character => character.id !== Number(id))
   setCharacters(charactersFilter);
};
   


return (
     <div className='App'>
    { location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null }
      
    
         <div>
         
         </div>
         <Routes>
            <Route path='/' element={<Form login={login}/>}/> 
            <Route path = ":Error404" element={<Error/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
);
};

export default App;
         

