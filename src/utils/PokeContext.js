import React, { useState, useEffect, createContext, useContext, useReducer } from "react";

//create new context 
const PokeContext = createContext()

//custom hook to provide immediate useage
export const usePokeContext = () => useContext(PokeContext)

export const PokeProvider = ({children}) =>{
    var [dogName, setDogName] = useState("Hunter") 
    var [dogInventory, setDogInventory] = useState([{clientName:"runa", balance:4, expendatures:[10,-15], password:"abc123"}])
    var [joke, setJoke] = useState("")


    var reducer = function(state, action){
        console.log("YYYYYYYYYYYY")
        console.log(action)
        console.log("YYYYYYYYYYYY")
        if(action.type === "increment"){
            return {count: state.count+1}
        }else if(action.type==="decrement"){
            return {count: state.count-1}
        }

        // switch(action.type){
        //     case "increment":
        //         return {count: state.count+1}
        //     case "decrement":
        //         return {count: state.count-1}
        // }
    }
    //--------------------USEREDUCER
    var [state, dispatch] =  useReducer(reducer, {count: 1})

    //--------------------

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
    <PokeContext.Provider value={{state, dispatch, dogName, setDogName, dogInventory, setDogInventory, joke, addDogToInventory, banana:"banana" }}>
        {children}
    </PokeContext.Provider>
    )
}

