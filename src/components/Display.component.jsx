import React, { useContext } from 'react';
import './Display.style.css';
import { Context } from '../Context';

export default function Display() {
    const [display] = useContext(Context);
    let str = display.join(' ');
    return (
        <div className="display-area">
            <input className="screen" type="text" placeholder={str} disabled></input>
        </div>
    )
}
