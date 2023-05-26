import React, { useState } from 'react';
import '../Calculator.css'

const Calculator = () => {
  

  return (
    <div className="calculator">
      <div className="display">
        <input type="text"/>
        <div className="result"></div>
      </div>
      <div className="keypad">
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button >+</button>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button >-</button>
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button >*</button>
        <button >0</button>
        <button >.</button>
        <button >=</button>
        <button >/</button>
        <button >C</button>
      </div>
    </div>
  );
};

export default Calculator;
