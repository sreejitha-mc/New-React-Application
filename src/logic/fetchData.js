import { useState, useEffect } from 'react';


const FetchData = () => {
    const [characters, setCharacters] = useState([]);
    

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
      console.log('data', data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return {
        characters
    };
};

export default FetchData;