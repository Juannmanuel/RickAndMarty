import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";


function Nav({onSearch}) {
    const location = useLocation()

    function getRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        return randomNumber;
      }

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to = "/About">About</NavLink>
            </button>
            <button>
                <NavLink to = "/Home">Home</NavLink>
            </button>
            <button onClick={()=>{onSearch(getRandomNumber())}}>Random</button>
            <button>
                <NavLink to = "/favorites">Favorites</NavLink>
            </button>

        </div>
    )
}
export default Nav;