import {usePokeContext} from "../utils/PokeContext"

function HomePage() {
  const {dogName, joke, setDogName, state, dispatch } = usePokeContext()
  console.log("-----BELOW IS CHUCK NORRIS JOKE")
  console.log(joke)
  console.log("-----ABOVE IS CHUCK NORRIS JOKE")

  const handleClick=(userName)=>{
    setDogName("ODIE")
  }

  const handleCountIClick=()=>{
    // setDogName("ODIE")
    dispatch({type:"increment"})
  }

  const handleCountDClick=()=>{
    dispatch({type:"decrement"})
  }

  return (
    <div>
     WELCOME TO THE HOMEPAGE WITH ALL THE NICE PICTURES
     <br></br>
     <h1 onClick={handleClick}>{dogName}</h1>
     <h1 onClick={handleCountIClick}>+</h1>
     <h1 onClick={handleCountDClick}>-</h1>
     <h4>{state.count}</h4>
    </div>
    )
  }

  export default HomePage;