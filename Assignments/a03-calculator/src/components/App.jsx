import { useState, useEffect } from 'react';
import '../styles/App.css';
import Buttons from './Buttons';
import { calculatorButtons } from '../data/calculator-bonus-03-button-data';

function App() {
  const [displayInput, setDisplayInput] = useState('0');

  useEffect(() => {
    document.title = 'React Calculator';
  }, []);

  return (
    <>
      <section className="calculator">
        <h1>React Calculator</h1>
        <div className="input-container">
          <p className="display-input">{displayInput}</p>
        </div>
        <div className="calculator-buttons">
          <Buttons
            buttons={calculatorButtons}
            displayInput={displayInput}
            setDisplayInput={setDisplayInput}
          />
        </div>
      </section>
    </>
  );
}

export default App;
