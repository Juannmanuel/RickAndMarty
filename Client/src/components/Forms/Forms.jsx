import { useState } from "react";
import validation from "../Nav/Validation/Validation";

const Form = ({login}) => {
const [errors, setErrors] = useState({});
const [userData, setUserData] = useState({
    email: "",
    password: ""
});
const handleSubmit = (event) =>{
event.preventDefault()
login(userData)
};

const handlerChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

    
     
     setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
     }));
    };

    
    
    return (
        <form>
            <label>Email: </label>
            <input name= "email" type= "text"  onChange={handlerChange} value={userData.email} />
            {errors.email && <p>{errors.email}</p>}
            <label>Password: </label>
            <input name="password" type="text"  onChange={handlerChange} value={userData.password} />
            {errors.password && <p>{errors.password}</p>}

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
    





export default Form;