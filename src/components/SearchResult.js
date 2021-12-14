import React from "react";

const SearchResult = (props) => {
  const { videoId, title, channelTitle, publishTime, description, thumbnail } =
    props.item;
  return (
    <a
      href="/#"
      className="list-group-item list-group-item-action"
      aria-current="true"
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
          <h5 className="mt-2 mb-2">{`${title} by ${channelTitle}`}</h5>
          <p className="mb-2">{description}</p>
          <small className="text-muted">{`Publish at ${publishTime}`}</small>
        </div>
      </div>
    </a>
  );
};

export default SearchResult;
