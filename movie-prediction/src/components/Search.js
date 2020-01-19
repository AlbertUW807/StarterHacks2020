import React, { useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

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

  // return (
  //   <MDBCol md="6">
  //     <MDBFormInline className="md-form">
  //       <MDBIcon icon="search" />
  //       <input
  //       className="form-control form-control-sm ml-3 w-75"
  //       value={searchValue}
  //       onChange={handleSearchInputChanges}
  //       type="text"
  //       placeholder="Search" 
  //       aria-label="Search"
  //       />

  //       <input onClick={callSearchFunction} type="submit" value="SEARCH" />
  //     </MDBFormInline>
  //   </MDBCol>
  // );

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