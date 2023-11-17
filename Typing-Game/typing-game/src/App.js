import logo from './logo.svg';
import './App.css';
import { generate } from './utils/words';
import { useState } from 'react';
import {useKeyPress} from './hooks/useKeyPress';

const initialWords = generate();


function App() {

  const [leftpadding,setleftpadding] = useState(
    new Array(20).fill(' ').join(' '),
  );

  const [outgoingchars,setoutgoingchars] = useState(' ')
  const [currentChar,setcurrentChar] = useState(initialWords.charAt[0])
  const [incomingchars,setincomingchars] = useState(initialWords.substring(1))

  useKeyPress(key => {
    let updatedOutgoingChars = outgoingchars;
    let updatedincomingChars = incomingchars;
    console.log(key)

    if(key === currentChar){
      if(leftpadding.length > 0){
        setleftpadding(leftpadding.substring(1))
      }

      updatedOutgoingChars += currentChar
      setoutgoingchars(updatedOutgoingChars)

      setcurrentChar(incomingchars.charAt(0));

      updatedincomingChars = incomingchars.substring(1);
      if(updatedincomingChars.split(' ').lenght <10){
        updatedincomingChars += ' ' +generate();
      }
      setincomingchars(updatedincomingChars);
    }
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Character'>
          <span className='Character-out'>
              {(leftpadding + outgoingchars).slice(-20)}
          </span>
          <span className='current-char'>{currentChar}</span>
          <span>{incomingchars.substring(0,20)}</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
