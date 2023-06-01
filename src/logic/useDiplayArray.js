import { useCallback, useState } from 'react';

const useDisplayArray = () => {
  const [data, setData] = useState([
    { id: 1, text: '' },
    { id: 2, text: '' },
    { id: 3, text: '' },
  ]);

  const handleChange = useCallback((id, newText) => {
    setData((data) =>
    data.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText };
        }
        return item;
      })
    );
  },[]);

  return [data, handleChange];
};

export default useDisplayArray;
