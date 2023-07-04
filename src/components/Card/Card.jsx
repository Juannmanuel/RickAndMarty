import style from "./Card.module.css" 
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";




export default function Card({name, status, species, gender, origin, image, onClose, id}) {
     
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>Nombre: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
         <h2>Origen: {origin}</h2>
         <NavLink to = {`/detail/${id}`}>
         <img src={image} alt={name} />
         </NavLink>
      </div>
         
        
         

   );
}
