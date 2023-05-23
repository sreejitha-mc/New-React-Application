import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import React, { useState } from 'react';
function Counter() {
   const [counter, setCounter] = useState(0);
   return (
      <div>
         <button onClick={() => setCounter(counter + 1)}>Increment</button>
         <button onClick={() => setCounter(counter - 1)}>Decrement</button>
         <p>Count: {counter}</p>
      </div>
   );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);


export default Counter;
  
  