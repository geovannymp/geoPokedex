import React from "react";
import Grid from '@mui/material/Grid';
import PokeCards from "./PokeCards";

const Pokedex = (props) => {
    const {pokemons} = props;

    return (
        <Grid container spacing={2}>
            {pokemons.map((pokemon,idx) => {
                return ( 
                    <Grid item xs={12} md={3} key={idx}>
                        <PokeCards pokemon={pokemon}/>
                    </Grid>
                )
            })}
        </Grid>  
    );

};

export default Pokedex;

{/*  */}