import React from "react";

const SearchForm = (props) => {
  const { onSubmitSearch, handleSearchInput, topic } = props;
  return (
    <div className="bg-light p-4 rounded mt-2">
      <h1>Youtube Video Search</h1>
      <p className="lead">
        Input a topic of interest and click the search button
      </p>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-75"
            id="search_box"
            value={topic}
            onChange={handleSearchInput}
            placeholder="Enter a Topic of Interest"
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary"
          onClick={onSubmitSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
