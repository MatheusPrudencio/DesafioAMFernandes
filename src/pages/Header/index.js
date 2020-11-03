import React from 'react';
import './styles.css'

export default function Header(props){
    return (
        <header>
            <h1 className='header'>{props.frase}</h1>
        </header>
    )
}
