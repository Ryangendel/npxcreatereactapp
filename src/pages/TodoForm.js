import List from "../components/List";
import React, { useState,useEffect } from "react";
import axios from "axios"

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const [charactor, setCharactor] = useState({});
    const [charactors, setCharactors] = useState(["celebi", "ditto", "dragonite"]);
    const [cleanedCharactors, setcleanedCharactors] = useState([])

    useEffect(()=>{
      getCharactors()
     
    },[])

    useEffect(()=>{
      console.log("YOUR VALUE HAS CHANGE, CLEARLY WNET UP!")
    },[value])

    //[{name:"Runa",id:123, adopted:true} ,{name:"Skadi":id:1234, adopted:false} ]
//CRUD
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        console.log("INSIDE THE HANDLE SUBMIT FUNCTION, if youre great job")
        console.log(value)
        addTodo(value)
        setValue('');
      }

      const getCharactors=()=>{
//["Celebi", "Ditto", "Dragonite"]
        charactors.forEach((poke)=>{
          console.log(`https://pokeapi.co/api/v2/pokemon/${poke}`)
          axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
          .then((cleanedData)=>{
            console.log(cleanedData.data.name)
            console.log(cleanedData.data.sprites.front_default)
            console.log("------------")
            var char = {name: leanedData.data.name, sprite: cleanedData.data.sprites.front_default}

            // console.log("Inside use effect with data")
            // setCharactor(cleanedData.data)
          })
        })
     
      }

    return (
      <div className="apple">
        <form onSubmit ={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
    </form>
    {/* <button onClick={activateLasers()}> */}
    {/* <button onMouseOver={(e)=>{activateLasers(e)}}>
        Activate Lasers
   </button> */}
          {charactor.base_experience}
          {/* {charactor.sprites.front_shiny} */}

          {/* <img src={charactor.sprites.front_shiny} alt="Girl in a jacket" width="50" height="60"></img> */}
    <h1>hello</h1>
    </div>
    );
}

export default TodoForm;