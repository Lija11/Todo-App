import React, { useState } from 'react';
import NewTodo from '../NewTodo/NewTodo';
import Todos from '../Todos/Todos';
import style from './Home.module.css'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) =>{
    setTodos((prevTodos) =>{
      return [...prevTodos, {id : uuidv4(), todo}] 
    });
    console.log('it is todo', todos)
  };

  const handleRemove = (id) => {
    setTodos((prev) => {
      const filteredTodos = prev.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  }
    return (
        <div className={style.container}> 
        <h1 style={{color: 'white'}}>Todo App</h1>
        <NewTodo onAddTodo = {handleAddTodo}></NewTodo>
          <Todos todos = {todos} onRemoveTodo = {handleRemove}></Todos>
        </div>
    );
};

export default Home;