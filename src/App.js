import * as React from 'react';
import './index.css';
import SearchBar from "./components/SearchBar";
import {getPokemonData, getPokemons} from './services/pokeapi';
import Pokedex from './components/Pokedex';


const {useState,useEffect} = React;

function App() {

  const [pokemons,setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try{
const data = await getPokemons();
const promises = data.results.map(async(pokemon)=>{
return await getPokemonData(pokemon.url)
})
const results = await Promise.all(promises)
setPokemons(results)
    }catch(err){

    }
  }

  useEffect(()=>{
    fetchPokemons();
  },[]);

  return (
    <div className="App">
      <SearchBar/>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
