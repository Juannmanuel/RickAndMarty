const validation = (userData) => {
    const errors = {};

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)){
     errors.email = "Deve ingresar un correo valido"
    }
    if(!userData.email){
        errors.email = "Deve ingresar un correo"
    };
    if(userData.email.length > 35){
        errors.email = "El correo no puede tener mas de 35 caracteres"
    };
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "su contraseña debe contener al menos un numero "
    };
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "su contraseña debe contener al menos 6 caracteres y menos de 10"
    };
    
    return errors;
};

export default validation;