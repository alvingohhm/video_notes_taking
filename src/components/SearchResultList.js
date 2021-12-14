import React from "react";
import SearchResult from "./SearchResult";

const SearchResultList = (props) => {
  const { results } = props;
  const resultList = results.map((item, index) => {
    // console.log(item.videoId);
    return <SearchResult key={item.videoId} item={item} />;
  });

  return <div className="list-group mt-3">{resultList}</div>;
};

export default SearchResultList;
