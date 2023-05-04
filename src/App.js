import logo from './logo.svg';
import './App.css';
import TodoForm from './pages/TodoForm';
import List from './components/List';

function App() {
  return (
    <div className="AppBanana">
      <TodoForm />
      <List />
    </div>
  );
}

export default App;
