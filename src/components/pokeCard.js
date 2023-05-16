import axios from "axios";
import React, { useState,useEffect } from "react";


function PokeCard(props){

    return(
      <div>
          {props.aggrigatedCharactors?.map((char, key)=>{
            console.log("^^^^^^^^^^^^^^")
            console.log(key)
            console.log("^^^^^^^^^^^^^^")
            return (
            <div className="charactors">
              <div>----------------</div>
              <h3>{char.name}</h3>
              <img src={`${char.image}`}></img>
              <div>----------------</div>
            </div>
            )
            })}
      </div>
      );
  }
 
  
export default PokeCard;