import React from 'react';
import './DisplayArrayData.css';
import useDisplayArray from '../../logic/useDiplayArray'

const DisplayArrayComponent = () => {
    const initialData = [
        { id: 1, text: 'First item' },
        { id: 2, text: 'Second item' },
        { id: 3, text: 'Third item' },
      ];
    
      const [data, handleChange] = useDisplayArray(initialData);
    
      return (
        <div className="container">
          <div className="editable-items">
            {data.map((item) => (
              <input
                key={item.id}
                value={item.text}
                onChange={(e) => handleChange(item.id, e.target.value)}
                className="input-box"
              />
            ))}
          </div>
          <div className="current-data">
            <h2>Current Array Data:</h2>
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    
};

export default DisplayArrayComponent;
