import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { useDescPokemon, usePokemon } from '../../Hooks/useFetch';
export const PokeCard = ({ pokemon }) => {

    const { data } = usePokemon(pokemon.url);
    console.log(data);
    const id = pokemon.url.split('/')
    /* const dataDesc  = useDescPokemon(id[6]); */
    /* className={data.types.length > 1 ? data.types[0].type.name + '-' + data.types[1].type.name : data.types[0].type.name}  */
    return (
        <>
            {data &&
                <Card className='card'>
                    <CardContent>

                        <Grid container spacing={1}>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="h4" gutterBottom component="div">
                                    {id[6]} {pokemon.name}
                                </Typography>
                                {data.types.map(type => {
                                    return (
                                        <Chip label={type.type.name} className={type.type.name} style={{ float: 'right', color: 'white', textTransform: 'capitalize' }} />
                                    )
                                })}
                            </Grid>
                            <Grid item xs={6}>
                                <img src={data.sprites.front_default} alt={pokemon.name} style={{ width: '10rem' }} />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={data.sprites.back_default} alt={pokemon.name} style={{ width: '10rem' }} />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider variant="middle" />
                                <h1>Hola</h1>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            }
        </>
    )
}
