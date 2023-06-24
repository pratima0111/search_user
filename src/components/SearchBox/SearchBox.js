import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className='pa3 tc ba br4 b--black bw2 fw5 bg-light-gray'
        type='search'
        placeholder='search user...'
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
