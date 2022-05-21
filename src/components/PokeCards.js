import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PokeCards = (props) => {
    const {pokemon} = props;
    console.log(pokemon);
    return (
        <div>
        <Card className={pokemon.types[0].type.name}>
            <CardContent >
            <Grid container spacing={2}>
            <Grid item xs={10}>
            <Typography variant="h5" component="div" xs={4}>
          {pokemon.name}
            </Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography variant="h5" component="div" xs={4}>
            #{pokemon.id}
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <img src={pokemon.sprites.back_default} alt={pokemon.name}/>
            </Grid>
            </Grid>
                
            </CardContent>
        </Card>
        </div>

    );

};

export default PokeCards;