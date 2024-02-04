import React, { useState } from 'react';

export default function TodoItem(props) {
    const [todoItem, setTodoItem] = useState(props.todoItem);
    const [isDone, setIsDone] = useState(todoItem.isDone);

    function toggleDone() {
        fetch(`http://localhost:3001/todoItems/${todoItem.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...todoItem,
                isDone: !isDone
            }),
        })
            .then(res => {
                if (res.ok) {
                    setIsDone(!isDone);
                }
            })
    }

    function deleteTodo() {
        if (window.confirm("삭제하시겠습니까?")) {
            fetch(`http://localhost:3001/todoItems/${todoItem.id}`, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    setTodoItem({ id: 0 });
                }
            });
        }
    }

    if (todoItem.id === 0) {
        return null;
    }

    return (
        <div className={`todo-item ${isDone ? 'done' : ''}`}>
            <input className='checkbox' type='checkbox' checked={isDone} onChange={toggleDone} />
            <p>{todoItem.todo}</p>
            <button className='delete-button' onClick={deleteTodo}>X</button>
        </div>
    );
}