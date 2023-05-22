import React, { useState, useEffect, createContext, useContext } from "react";

//create new context 
const PokeContext = createContext()

//custom hook to provide immediate useage
export const usePokeContext = () => useContext(PokeContext)

export const PokeProvider = ({children}) =>{
    var [dogName, setDogName] = useState("Hunter") 
    var [dogInventory, setDogInventory] = useState([{name:"runa", age:4, caretaker:"Ryan"}])
    var [joke, setJoke] = useState("")

    useEffect(()=>{
        fetch("https://api.chucknorris.io/jokes/random")
        .then(dirtyData=>dirtyData.json())
        .then(cleanedData=>{
            setJoke(cleanedData.value)
        })
    },[])

    const addDogToInventory = (dog)=>{
        console.log("inside ADD DOG")
    }

    return(
    <PokeContext.Provider value={{dogName, setDogName, dogInventory, setDogInventory, joke, addDogToInventory }}>
        {children}
    </PokeContext.Provider>
    )
}

