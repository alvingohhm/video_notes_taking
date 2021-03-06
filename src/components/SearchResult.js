import React from "react";
import { Link } from "react-router-dom";
import parse from "../utils/htmlTextParser";

const SearchResult = (props) => {
  const { videoId, title, channelTitle, publishTime, description, thumbnail } =
    props.item;

  // const parser = new DOMParser();
  // const newtitle = parser.parseFromString(title, "text/html").body.textContent;
  const newtitle = parse(title);
  return (
    <Link
      to={{
        pathname: "/notes",
        state: { videoProps: { videoId, title, channelTitle, description } },
      }}
      className="list-group-item list-group-item-action"
      id={videoId}
    >
      <div className="row g-0">
        <div className="col-md-1 d-flex flex-column justify-content-center ">
          <img
            src={thumbnail}
            className="img-fluid rounded-start"
            alt={title}
          />
        </div>
        <div className="col-md-11 ps-3">
          <h5 className="mt-2 mb-2">{`${newtitle} by ${channelTitle}`}</h5>
          <p className="mb-2">{description}</p>
          <small className="text-muted">{`Publish at ${publishTime}`}</small>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
