import React, {useState, createContext} from 'react';

export const Context= createContext();

export const Provider = props => {
    const [display, setDisplay] = useState([]);
    return(
        <Context.Provider value={[display, setDisplay]} >
            {props.children}
        </Context.Provider>
    )
}