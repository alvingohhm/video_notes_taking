import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResultList from "./SearchResultList";
import youTubeData from "../data/resources";
import youTubeApi from "../api/youTubeApiConfig";

const Main = () => {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState({});

  const handleSearchInput = (evt) => {
    setTopic(evt.target.value);
  };

  const onSubmitSearch = (evt) => {
    evt.preventDefault();
    console.log(topic);
    // setHasSearch(true);
    getSearch("/search");
  };

  const getSearchResult = youTubeData.items.map((item) => {
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
    };
  });

  const filterResponseData = (rawData) => {
    const { nextPageToken } = rawData;
    console.log(nextPageToken);
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

  const getSearch = async (url) => {
    // setIsLoading(true);
    // setError(null);
    try {
      const params = {
        part: "snippet",
        q: topic,
        relevantLanguage: "en",
        type: "video",
      };
      const data = await youTubeApi
        .get(url, { params })
        .then((res) => {
          // console.log(filterResponseData(res.data));
          return filterResponseData(res.data);
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      console.log(data);
      setResults(data);
    } catch (error) {
      // setError(error.message);
    }
    // setIsLoading(false);
  };

  // getSearch();

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
