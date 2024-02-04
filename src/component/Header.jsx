import React from 'react';
import Clock from './Clock';

export default function Header() {
    return (
        <header id='header'>
            <h1 id='title'>TO DO LIST</h1>
            <Clock/>
        </header>
    );
}