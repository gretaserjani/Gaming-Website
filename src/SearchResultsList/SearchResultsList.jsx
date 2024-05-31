import React from 'react';
import './SearchResultsList.css';

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {results?.map((result, id) => {
        return <SearchResultsList result={result} key={id}/>;
      })}
    </div>
  );
};

export default SearchResultsList;