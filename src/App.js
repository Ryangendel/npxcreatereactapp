import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import TodoForm from './pages/TodoForm';
import List from './components/List';
import HomePage from "./pages/HomePage";
import { PokeProvider } from "./utils/PokeContext"

function App() {
  return (
    <div>
      <PokeProvider>
        <Router>
          <h1>choose your adventure</h1>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/pokeapi" element={<TodoForm />} />
            <Route path="/pokeapi/:pokemonCharacter" element={<TodoForm />} />
            <Route path="/todolist" element={<List />} />
            <Route path="/todolist/:id" element={<List />} />
          </Routes>
        </Router>
      </PokeProvider>
    </div>
  );
}

export default App;
