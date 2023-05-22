import List from "../components/List";
import {useParams} from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios, { all } from "axios"
import PokeCard from "../components/pokeCard"

function TodoForm({ addTodo }) {
  const {pokemonCharacter, id, banana} = useParams()
  
  const [life, setLife] = useState({ lifeAbsorbed: 0, nameOfPokemon: "Ditto" })
  const [value, setValue] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [charactor, setCharactor] = useState({});
  const [charactors, setCharactors] = useState(["celebi", "ditto", "dragonite"]);
  const [aggrigatedCharactors, setAggrigatedCharactors] = useState([])

  //Snorlax
  

  useEffect(() => {
    console.log("llllllllllllllllll")
    console.log(id)
    console.log(banana)
    console.log("llllllllllllllllll")
    getCharactors()
    pokemonCharacter? getDynamicPokemon():console.log("not a actual character")
  }, [])

  useEffect(() => {
    getCharactors()
  }, [charactors])

  useEffect(() => {
    console.log("WHEN AM I FIREING OFF")
  }, [aggrigatedCharactors])


  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    console.log("INSIDE THE HANDLE SUBMIT FUNCTION, if youre great job")
    console.log(value)
    addTodo(value)
    setValue('');
  }

  const getDynamicPokemon = e => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonCharacter.toLowerCase()}`)
      .then((cleanedData) => {
       console.log("CLEANED DATA FROM POKEMON CALL")
        console.log(cleanedData.data.name)
        setCharactors([...charactors, cleanedData.data.name])

      })
      setPokemonName('');
  }

  const makePokeCall = e => {
    e.preventDefault();

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((cleanedData) => {
       console.log("CLEANED DATA FROM POKEMON CALL")
        console.log(cleanedData.data.name)
        setCharactors([...charactors, cleanedData.data.name])

      })
      setPokemonName('');
  }



  const getCharactors = async () => {

    var allCharactors = []

    for (let i = 0; i < charactors.length; i++) {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${charactors[i]}`)
        .then((cleanedData) => {
          var char = { name: cleanedData.data.name, image: cleanedData.data.sprites.front_default }
          console.log("INSIDE THE HANDLE SUBMIT FUNCTION")
          console.log(char)
          console.log("INSIDE THE HANDLE SUBMIT FUNCTION")
          allCharactors = [...allCharactors, char]
        })
    }

    setAggrigatedCharactors(allCharactors)
  }

  return (
    <div className="apple">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
      </form>

      {/* <PokeCard pokeCharactor={life} setLife={setLife}/>
          {charactor.base_experience} */}
      <PokeCard aggrigatedCharactors={aggrigatedCharactors} />

      <form onSubmit={makePokeCall}>
        <input
          type="text"
          className="input"
          value={pokemonName}
          placeholder="Name a pokemon"
          onChange={e => setPokemonName(e.target.value)} />
      </form>
    </div>
  );
}
export default TodoForm;

//NOTES BELOW -----------------------------------------------------------
{/* {charactor.sprites.front_shiny} */ }

{/* <img src={charactor.sprites.front_shiny} alt="Girl in a jacket" width="50" height="60"></img> */ }
{/* <button onClick={activateLasers()}> */ }
{/* <button onMouseOver={(e)=>{activateLasers(e)}}>
        Activate Lasers
   </button> */}

