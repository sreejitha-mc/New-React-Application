import React, { memo } from 'react';
import './DisplayArrayData.css';
import useDisplayArray from '../../logic/useDiplayArray';

const InputComponent = memo(({ id, text, onChange }) => {
    console.log('in')
  return (
    <input
      value={text}
      onChange={(e) => onChange(id, e.target.value)}
      className="input-box"
    />
  );
});

const DisplayArrayComponent = () => {
  const initialData = [
    { id: 1, text: '' },
    { id: 2, text: '' },
    { id: 3, text: '' },
  ];

  const [data, handleChange] = useDisplayArray(initialData);

  return (
    <div className="container">
      <div className="editable-items">
        {data.map((item) => (
            <div>
          <InputComponent
            key={item.id}
            id={item.id}
            text={item.text}
            onChange={handleChange}
          />
          </div>
        ))}
      </div>
      <div className="current-data">
        <h2>Current Array Data:</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id} {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayArrayComponent;
