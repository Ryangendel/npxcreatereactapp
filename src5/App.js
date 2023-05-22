import React from "react";
// TODO: import useFormik from formik library
//import { useFormik } from "formik";
import axios, { all } from "axios";
import { useState, useEffect } from "react";
import USState from "./USState"
// import Showalerts from "...src/components/stateCard";


const Showalerts = (props) =>{
  console.log("in showalerts")
  console.log("props is :", props);
  //console.log("props.alerts[1].stateName is :", props.alerts[1].stateName);
  //cant get props.map to work.....


  return (
    <div>
      <h1>hey youre in here</h1>
      {props.states.map((state, index)=>{
       return <USState state={state} index={index+1}/>
      })}
    </div>
  );
}
   //for -> map 
// {
//   (() => {

//     for(let i = 0; i < props.states.length; i++){
//       console.log("HOW MANY TIMES AM I FIREING OFF")
//       console.log(props.states.length)
//       // console.log("in for loop");
//       // console.log("props.alerts[i].stateName is :", props.alerts[i].stateName);
//       return (
//         <div>
//           <USState />
//           {/* {props.alerts[i].stateName} */}
//         </div>
//       )
//     }
//   })()
// }

function App() {
  const [alerts, setAlerts] = useState({});
  const [states, setStates] = useState([
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ]);
  

 // TODO: add a const called formik assigned to useFormik()
 
  useEffect(() => {
    getAlerts();
  }, []);

  const getAlerts = async () => {
    var allStateAlerts = [];
  
    for (let i = 0; i < states.length; i++) {
      const url = `https://api.weather.gov/alerts/active/area/${states[i]}`;
      const result = await axios.get(url);
      // console.log(result.data);
      //console.log("before push");
      allStateAlerts.push({
        stateName: states[i],
        features: result.data.features,
      });
    }
    //console.log("after for loop and before setallstatealerts");
    setAlerts(allStateAlerts);
    //console.log("allStateAlerts : ", allStateAlerts);
  };

  // if features array len is 0, then no alerts
  // features[array index].properties.areaDesc gives the area details within the state
  // features[array index].properties.event gives the weather event type
  // features[array index].properties.instructions gives adivsory instructions

  return (
    <div>
      <h1>Weather Alerts</h1>
      <Showalerts alerts={alerts} states={states}/>
    </div>
  );
}

export default App;
