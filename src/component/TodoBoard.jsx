import React, { useRef, useState } from 'react';
import useFetch from '../hook/useFetch';
import TodoItem from './TodoItem';

export default function TodoBoard() {
    const todoItems = useFetch(`http://localhost:3001/todoItems`)
    const [isLoading, setIsLoading] = useState(false);
    const todoRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/todoItems/`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    todo: todoRef.current.value,
                    isDone: false
                }),
            }).then(res => {
                if (res.ok) {
                    setIsLoading(false);
                    todoRef.current.value = '';
                }
            });
        }
    }

    return (
        <div id='todo-board'>
            <form onSubmit={onSubmit}>
                <input type='text' ref={todoRef} required />
                <button>+</button>
            </form>
            <div id='todo-list'>
                {todoItems.map(todoitem => <TodoItem todoItem={todoitem} />)}
            </div>
        </div>
    );
}