import React, { memo } from 'react';
import './DisplayArrayData.css';
import useDisplayArray from '../../logic/useDiplayArray';

const InputComponent = memo(({ id, text, onChange }) => {
  return (
    <div>
      <p>Re-render {(Math.random() * 100).toFixed()}</p>
    <input
      value={text}
      onChange={(e) => onChange(id, e.target.value)}
      className="input-box"
    />
    </div>
  );
});

const DisplayArrayComponent = () => {
  // const initialData = [
  //   { id: 1, text: '' },
  //   { id: 2, text: '' },
  //   { id: 3, text: '' },
  // ];

  const [data, handleChange] = useDisplayArray();

  return (
    <div className="container">
      <div className="editable-items">
        {data.map((item) => (
          <InputComponent
            key={item.id}
            id={item.id}
            text={item.text}
            onChange={handleChange}
          />
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
