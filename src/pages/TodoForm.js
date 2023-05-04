import List from "../components/List";
import React, { useState } from "react";

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        console.log("INSIDE THE HANDLE SUBMIT FUNCTION, if youre great job")
        console.log(value)
        addTodo(value)
        setValue('');
      }

    return (
        <form onSubmit ={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
    </form>
    );
}

export default TodoForm;