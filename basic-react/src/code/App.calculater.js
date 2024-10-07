import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  // Array of button values
  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    'C', '0', '=', '/'
  ];

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" readOnly value={display} />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <button type='button' key={button} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

