import { useState, useEffect } from 'react';

export const useAllPokemons = (offset = 0, limit = 10) => {
    const [pokemons, setPokemons] = useState({ data: null, loading: true });
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then(resp => resp.json())
            .then(data => {
                setPokemons({
                    loading: false,
                    data
                })
            });

    }, [offset, limit]);
    return pokemons;
}

export const usePokemon = (url='') => {
    const [pokemon, setPokemon] = useState({ data: null});
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setPokemon({
                    data
                })
            });

    }, [url]);
    return pokemon;
}

export const useDescPokemon = (id=1) => {
    const [pokemon, setPokemon] = useState({ data: null});
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/characteristic/${id}/`)
            .then(resp => resp.json())
            .then(data => {
                setPokemon({
                    data
                })
            });

    }, [id]);
    
    return pokemon.data;
}
