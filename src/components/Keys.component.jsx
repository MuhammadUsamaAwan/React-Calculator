import React, { useContext } from 'react';
import './Keys.style.css';
import { Context } from '../Context';

export default function Keys() {
    const [display, setDisplay] = useContext(Context);
    let arr = [];
    const clickHandler = e =>
    {
        arr += e.target.value;
        setDisplay(prevDisplay => [...prevDisplay, arr]);
    }

    const executeCommand = () => {
        let num1 = "";
        display.forEach ( curr => num1= num1.concat(curr))
        
        try {
          eval(num1); 
        } catch (e) {
          if (e instanceof SyntaxError) {
              alert(e.message);
              num1 = ""
          }
        } finally {
          setDisplay([]);
          setDisplay(prevDisplay => [eval(num1)]);
        }
    }

    return (
        <table>
        <tbody>
            <tr>
              <td className="operator">
                <input value='(' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="operator">
                <input value=')' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="operator">
                <input value='%' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="operator">
                <input value='AC' type='button' className="key" onClick={() => setDisplay([])}></input>
              </td>
            </tr>
            <tr>
              <td className="number">
                <input value='7' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="number">
                <input value='8' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="number">
                <input value='9' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="operator">
                <input value='/' type='button' className="key" onClick={clickHandler}></input>
              </td>
            </tr>
            <tr>
              <td className="number">
                <input value='4' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="number">
                <input value='5' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="number">
                <input value='6' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="operator">
                  <input value='*' type='button' className="key" onClick={clickHandler}></input>
              </td>
            </tr>
            <tr>
              <td className="number">
                 <input value='1' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="number">
                 <input value='2' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="number">
                 <input value='3' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="operator">
               <input value='-' type='button' className="key" onClick={clickHandler}></input>
              </td>
            </tr>
            <tr>
              <td className="number">
                  <input value='0' type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="operator">
                <input value='.' style={{fontWeight: 'bolder'}} type='button' className="key" onClick={clickHandler}></input>
              </td>
              <td className="equal">
                 <input value='=' style={{color: 'white'}} type='button' className="key" onClick={executeCommand}></input>
              </td>
              <td className="operator">
                  <input value='+' type='button' className="key" onClick={clickHandler}></input>
              </td>
            </tr>
        </tbody>
        </table>
    )
}