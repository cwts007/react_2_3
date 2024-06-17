import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Pokemones.css';

export default function Pokemones() {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => {
                setPokemones(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching the Pokemon data: ", error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Pokemones</h1>
            <ul>
                {pokemones.map(pokemon => (
                    <li key={pokemon.name}>
                        <Link to={`/pokemones/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
