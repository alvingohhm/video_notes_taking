import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResultList from "./SearchResultList";
import youTubeData from "../data/resources";
import youTubeApi from "../api/youTubeApiConfig";
import axiosFetch from "../api/useAxiosFetch";
import useLocalStorage from "../hooks/useLocalStorage";

const Main = () => {
  const [topic, setTopic] = useState("");
  // const [results, setResults] = useState({});
  const [results, setResults] = useLocalStorage("results", {});

  const filterYouTubeData = (rawData) => {
    const { nextPageToken = "" } = rawData;
    return rawData.items.map((item) => {
      const { id = {}, snippet = {} } = item;
      const { videoId } = id;
      const { title, channelTitle, publishTime, description } = snippet;
      const { url: thumbnail } = snippet.thumbnails.default;
      return {
        videoId,
        title,
        channelTitle,
        publishTime,
        description,
        thumbnail,
        nextPageToken,
      };
    });
  };

  //using fetch api
  // const getSearchResult = async () => {
  //   const params = {
  //     url: "/search",
  //     method: "get",
  //     params: {
  //       part: "snippet",
  //       q: topic,
  //       relevantLanguage: "en",
  //       type: "video",
  //     },
  //   };
  //   const res = await axiosFetch(youTubeApi, params, filterYouTubeData);
  //   setResults(res);
  //   // console.log("response", res);
  //   // setIsLoading(false);
  // };

  // using downloaded data instead of Api to save quota
  const getSearchResult = async () => {
    const res = await filterYouTubeData(youTubeData);
    setResults(res);
  };

  const handleSearchInput = (evt) => {
    setTopic(evt.target.value);
  };

  const onSubmitSearch = (evt) => {
    evt.preventDefault();
    getSearchResult();
  };

  return (
    <div className="container">
      <SearchForm
        onSubmitSearch={onSubmitSearch}
        handleSearchInput={handleSearchInput}
        topic={topic}
      />
      {Object.keys(results).length > 0 && (
        <SearchResultList results={results} />
      )}
    </div>
  );
};

export default Main;
