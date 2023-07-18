import React, {useState} from "react";
export default function SearchBar({onSearch}) {

   // function imputAlto (id){
   //    if(id > 826){
   //       return window.alert("Flaco, mete un numero menor a 826")
   //    }
   // }
   
   const [id, setId] = useState("");
   
   const handleChange = (event) => {
      setId(event.target.value)
   };
   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
