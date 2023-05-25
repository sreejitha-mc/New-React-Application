import React, { useState, useEffect } from 'react';

const useFetchData = (initialPage) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const data = await response.json();
      setCharacters(data.results);
      console.log('data', data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };

  return {
    characters,
    currentPage,
    handleNextPage,
    handlePreviousPage
  };
};

export default useFetchData;