import React from 'react';
import FetchData from '../logic/useFetchData.js';
import '../App.css';
import useFetchData from '../logic/useFetchData.js';

function CharacterGrid() {
    const { characters, currentPage, handleNextPage, handlePreviousPage } = useFetchData(1);

  const getGridRows = (characters) => {
    const gridRows = [];
    const charactersPerRow = 6;

    for (let i = 0; i < characters.length; i += charactersPerRow) {
      const rowCharacters = characters.slice(i, i + charactersPerRow);
      gridRows.push(rowCharacters);
    }

    return gridRows;
  };

  return (
    <div className="character-grid">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage}>Next</button>

      {getGridRows(characters).map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((character) => (
            <div key={character.id} className="character-card">
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin.name}</p>
              <p>Species: {character.species}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

}

export default CharacterGrid;
