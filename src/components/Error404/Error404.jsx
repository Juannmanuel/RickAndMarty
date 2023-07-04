import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <img src="https://cdn.dribbble.com/users/5751927/screenshots/14417011/rick-and-morty-404-dribbble.png" alt="Error404" />
            
            <button>
                <NavLink to = "/home">HOME</NavLink>
            </button>
        </div>
    )
}

export default Error