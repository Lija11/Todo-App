import React from 'react';
import Todo from '../Todo/Todo';
import style from './Todos.module.css';

const Todos = (props) => {
    const todos = props.todos;
    return (
        <div className ={style.todos}>
            {
                todos.map((todos) => <Todo todos = {todos.todo}
                                            key = {todos.id}
                                            id = {todos.id}
                                            onRemoveTodo = {props.onRemoveTodo}>   
                                            </Todo>)
            }
        </div>
    );
};

export default Todos;