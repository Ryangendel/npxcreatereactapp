import {usePokeContext} from "../utils/PokeContext"

function HomePage() {
  const {dogName, joke, setDogName} = usePokeContext()
  console.log("-----BELOW IS CHUCK NORRIS JOKE")
  console.log(joke)
  console.log("-----ABOVE IS CHUCK NORRIS JOKE")

  const handleClick=()=>{
    setDogName("ODIE")
  }

  return (
    <div>
     WELCOME TO THE HOMEPAGE WITH ALL THE NICE PICTURES
     <br></br>
     <h1 onClick={handleClick}>{dogName}</h1>
    </div>
    )
  }

  export default HomePage;