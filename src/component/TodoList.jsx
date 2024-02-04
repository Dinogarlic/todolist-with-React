import React from 'react';
import useFetch from '../hook/useFetch';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todoItems = useFetch(`http://localhost:3001/todoItems`)
    return (
        <div id='todo-list'>
            {todoItems.map(todoitem => <TodoItem todoItem={todoitem} />)}
        </div>
    );
}