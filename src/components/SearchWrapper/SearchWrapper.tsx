'use client';

import SearchInput from '../SearchInput/SearchInput';

const SearchWrapper = () => {
  return (
    <SearchInput
      value=""
      label="Search for movies or TV series"
      onChange={(e) => console.log(e)}
      placeholder="Search for movies or TV series"
    />
  );
};

export default SearchWrapper;
