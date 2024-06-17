import { useNavigate } from "react-router-dom";
import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    const goToPokemones = () => {
        navigate('/pokemones');
    };

    return (
        <div className="home-container">
            <h1>Bienvenido maestro Pokémon</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="pokemon-image" />
            <button onClick={goToPokemones}>Ver Pokemones</button>
        </div>
    );
}
