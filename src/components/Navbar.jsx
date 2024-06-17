import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <nav>
            <NavLink className={setActiveClass} to="/">Home</NavLink>
            <NavLink className={setActiveClass} to="/pokemones">Pokemones</NavLink>
        </nav>
    );
}
