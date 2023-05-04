import React, { useState } from "react";
import TodoForm from "../pages/TodoForm";

function List(){
    const [todos, setTodos] = useState([
      {
        text: 'Wake Up',
        isCompleted: false,
      },
      {
        text: 'Eat Breakfast',
        isCompleted: false,
      },
      {
        text: 'Learn React',
        isCompleted: false,
      },
      {
        text: 'Meet Friend for Lunch',
        isCompleted: false,
      },
      {
        text: 'Build Todo App',
        isCompleted: false,
      },
      {
        text: 'Take a Nap',
        isCompleted: false,
      },
      {
        text: 'Debug Todo App',
        isCompleted: false,
      },
      {
        text: 'Have Dinner',
        isCompleted: false,
      },
      {
        text: 'deploy Todo App',
        isCompleted: false,
      },
      {
        text: 'Go to Bed',
        isCompleted: false,
      }
    ])
   
    const addTodo = text => { 
      const newTodos = [...todos, { text: text, isCompleted: false }];
      setTodos(newTodos);
    }
  
  
    const removeTodo = e => {
      const index = Number(e.target.id);
      let temp = [...todos];
      temp.splice(index, 1);
      setTodos(temp);
    }
  
    return(
      <div>
        {todos.map((todo, i) => <div key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
        <TodoForm addTodo={addTodo}/>
      </div>);
  }
 
  
  export default List;