import React, { useState } from 'react'
import ListItem from './ListItem';

function Todo() {
    const [todo, setTodo] = useState(""); 
    const [todoList, setTodoList] = useState([]);
    const handleChange=(event)=>{
        setTodo(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo('');
    }
    return (
    <div>Todo
        <form onSubmit={handleSubmit}>
            <input value={todo}type='text' onChange={handleChange}></input>
            <button type='submit'>add item</button>
        </form>
        {todoList.map((item)=> <ListItem key={item} name={item}/>)}
    </div>
  )
}

export default Todo;