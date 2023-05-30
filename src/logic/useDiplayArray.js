import { useState } from 'react';

const useDisplayArray = (initialData) => {
  const [data, setData] = useState(initialData);

  const handleChange = (id, newText) => {
    setData((data) =>
    data.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText };
        }
        return item;
      })
    );
  };

  return [data, handleChange];
};

export default useDisplayArray;
