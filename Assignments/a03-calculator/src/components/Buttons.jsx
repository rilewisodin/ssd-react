import '../styles/Buttons.css';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

const Buttons = ({ buttons, displayInput, setDisplayInput }) => {
  const [memory, setMemory] = useState('0');

  useEffect(() => {
    console.log('memory: ', memory);
  }, [memory]);

  const isOperator = (char) => ['+', '-', '\u00d7', '\u00f7'].includes(char);
  const isNumberChar = (char) => char >= '0' && char <= '9';

  function processButton(button) {
    switch (button.type) {
      case 'number':
        processNumber(button);
        break;

      case 'operator':
        processOperator(button);
        break;

      case 'clear':
        processClear(button);
        break;

      case 'enter':
        processEnter(button);
        break;

      case 'memory':
        processMemory(button, displayInput, setDisplayInput);
        break;

      case 'sign':
        console.log('sign', button.value);
        // processSign(button);
        break;

      case 'percent':
        console.log('percent', button.value);
        // processPercent(button);
        break;

      case 'sqrt':
        console.log('sqrt', button.value);
        // processSqrt(button);
        break;

      default:
        console.log('default', button.value);
    }
  }

  // Process Number
  // 1) for decimal point (.)
  //    if the character before is not a number, append '0.' to display
  //    if the number characters before contain a decimal, ignore the input
  // 2) if the display is '0'
  //      replace display with input
  //    else
  //      append the input to the display
  function processNumber(button) {
    var inNumber = true;

    setDisplayInput((prevInput) => {
      if (button.value === '.') {
        if (!isNumberChar(prevInput[prevInput.length - 1])) {
          if (prevInput[prevInput.length - 1] === '.') {
            return prevInput;
          } else {
            return prevInput + '0.';
          }
        }

        for (let i = prevInput.length - 1; i >= 0 && inNumber; i--) {
          if (prevInput[i] === '.') {
            return prevInput;
          } else if (!isNumberChar(prevInput[i])) {
            inNumber = false;
          }
        }
      } else if (
        prevInput[prevInput.length - 1] === '0' &&
        prevInput.length === 1
      ) {
        return String(button.value);
      }

      return prevInput + button.value;
    });
  }

  // Process Operator
  // 1) if the display is empty, ignore the input
  // 2) if the previous character is the same operator as the input, ignore the input
  // 3) if the previous character is a different operator than the input, replace the previous operator with
  function processOperator(button) {
    setDisplayInput((prevInput) => {
      if (prevInput === '') {
        return prevInput;
      }

      var previousCharacter = prevInput[prevInput.length - 1];

      // the same operator was entered twice in a row, so ignore the second entry
      if (button.value === previousCharacter) {
        return prevInput;
      }

      // if the previous character is an operator, replace it with the new operator
      else if (isOperator(previousCharacter)) {
        return prevInput.slice(0, -1) + button.text;
      }

      return prevInput + button.text;
    });
  }

  // Process Clear buttons
  //  All Clear (AC)
  //    reset display to '0'
  //  Clear (C) keys
  //    remove the last input character. If the result is an empty string, reset display to '0'
  function processClear(button) {
    console.log('clear', button.value);
    if (button.value === 'All Clear') {
      setDisplayInput('0');
    } else if (displayInput.length == 1) {
      setDisplayInput('0');
    } else {
      setDisplayInput((prev) => prev.slice(0, -1));
    }
  }

  // Process Enter (=) button
  //  if the display is empty OR the last character is an operator
  //    return the display unchanged
  //
  //  calculate the expression and set result to display
  function processEnter(button) {
    console.log('enter', button.value);
    setDisplayInput((prevInput) => {
      if (prevInput === '' || isOperator(prevInput[prevInput.length - 1])) {
        return prevInput;
      }

      calculate(prevInput);
    });
  }

  // Process Memory
  // This function processes the memory buttons.
  //  If the button is Memory Save, Memory Add, or Memory Subtract,
  //    and the display is empty or ends with an operator, ignore the input
  //    otherwise, calculate the display value and use that as the new memory value
  //  Memory Save sets memory to the display value
  //  Memory Clear sets memory to '0'
  //  Memory Recall sets the display to the memory value
  //  Memory Add adds the display value to the memory value and sets memory to the result
  //  Memory Subtract subtracts the display value from the memory value and sets memory to the result
  // Finally, update the display as needed
  function processMemory(button, displayInput, setDisplayInput) {
    let displayOutput = null;
    let calculatedValue = null;

    if (
      button.value === 'Memory Save' ||
      button.value === 'Memory Add' ||
      button.value === 'Memory Subtract'
    ) {
      if (
        displayInput === '' ||
        isOperator(displayInput[displayInput.length - 1])
      ) {
        return;
      }

      calculatedValue = calculate(displayInput, true);
    }

    var newMemory = calculatedValue !== null ? calculatedValue : displayInput;

    switch (button.value) {
      case 'Memory Save':
        setMemory(newMemory);
        displayOutput = newMemory;
        break;

      case 'Memory Clear':
        setMemory('0');
        break;

      case 'Memory Recall':
        displayOutput = memory;
        break;

      case 'Memory Add':
        setMemory(String(+memory + +newMemory));
        break;

      case 'Memory Subtract':
        setMemory(String(+memory - +newMemory));
        break;
      default:
        console.log('default', button.text);
    }

    setDisplayInput(displayOutput !== null ? displayOutput : displayInput);
  }

  // Calculate Function
  function calculate(input, calculateOnly = false) {
    function safeEval(str) {
      /*
      This is safe(r) than eval
      Instead of directly evaluating the string expression, it returns an anonymous function, the body of 
      which returns the result of the expression. We then immediately invoke the anonymous function by 
      appending ().
      See here for further explanation:
      https://www.educative.io/answers/eval-vs-function-in-javascript

      That said, a user could still edit mathStr to execute arbitrary code.
      To further secure this we would need to sanitize the input to endure only numbers, valid operators, and 
      period are allowed in mathStr.  
      */
      // console.log('str-b: ', str, ', str-b.length: ', str.length);
      str = str.replace(/×/g, '*').replace(/÷/g, '/');
      // console.log('str-a: ', str, ', str-a.length: ', str.length);
      return new Function('return ' + str)();
    }

    // See this MDN page for details:
    // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
    // console.log('calculate', input);
    const newStr = safeEval(input);
    // console.log('newStr', newStr);
    // setOutputStr(`${newStr}`);

    if (calculateOnly) return `${newStr}`;

    setDisplayInput(`${newStr}`);
  }

  // Process Sign (+/-) button
  //  if the display is empty, ignore the input
  //  if the display is a number, toggle the sign of the number
  // function processSign(button) {
  //   setDisplayInput((prevInput) => {
  //     if (prevInput === '') {
  //       return prevInput;
  //     }
  //   });
  // }

  // Process Percent (%) button

  // Process Square Root (√) button

  return (
    <>
      {Object.keys(buttons).map((keyOuter) => (
        <div key={keyOuter} className="calculator-buttons-column">
          {Object.keys(buttons[keyOuter]).map((keyInner) => (
            <button
              disabled={buttons[keyOuter][keyInner].type === 'empty'}
              key={`${keyInner}-${keyOuter}`}
              id={`${keyInner}-${keyOuter}`}
              className={`${buttons[keyOuter][keyInner].type} ${buttons[keyOuter][keyInner].className}`}
              onClick={() => processButton(buttons[keyOuter][keyInner])}
            >
              {buttons[keyOuter][keyInner].text}
            </button>
          ))}
        </div>
      ))}
    </>
  );
};

Buttons.propTypes = {
  buttons: PropTypes.object.isRequired,
  displayInput: PropTypes.string.isRequired,
  setDisplayInput: PropTypes.func.isRequired,
};

export default Buttons;
