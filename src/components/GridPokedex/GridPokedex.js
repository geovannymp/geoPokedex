import { useState } from 'react';
import { Grid } from '@mui/material';
import { PokeCard } from '../PokeCard/PokeCard';
import Pagination from '@mui/material/Pagination';
import { useAllPokemons } from '../../Hooks/useFetch';
import { useEffect } from 'react';


export const GridPokedex = () => {

    const [pagination, setpagination] = useState({ page: 1, offset: 0, limit: 10, count: 10 })

    const resp = useAllPokemons(pagination.offset, pagination.limit);

    const handleChangePagintaion = (e, page) => {
        let newOffset = (page - 1) * 10;
        setpagination({ ...pagination, page: page, offset: newOffset });
    }

    useEffect(() => {
        if (resp.data) {
            let total = parseInt(resp.data.count / 10);
            setpagination({ ...pagination, count: total })
        }
    }, [resp]);

    return (
        <>
            {resp.data &&
                <Grid container spacing={4}>
                    {resp.data.results.map(pokemon => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={pokemon.name}>
                                <PokeCard pokemon={pokemon} />
                            </Grid>
                        )
                    })}

                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination count={pagination.count} size="medium" onChange={handleChangePagintaion} />
                    </Grid>

                </Grid>
            }
        </>
    )
}
