import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonDetail.css';

export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                setPokemon(response.data);
            })
            .catch(error => {
                console.error("Error fetching the Pokemon details: ", error);
            });
    }, [name]);

    return (
        <div>
            <h1>Detalle del Pokemon: {name}</h1>
            {pokemon ? (
                <div>
                    <p><strong>Nombre:</strong> {pokemon.name}</p>
                    <p><strong>Peso:</strong> {pokemon.weight}</p>
                    <p><strong>Altura:</strong> {pokemon.height}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}
