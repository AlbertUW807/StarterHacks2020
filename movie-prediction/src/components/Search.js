import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search mb-4 mt-4">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH MOVIES" />
    </form>
  );

};

export default Search;