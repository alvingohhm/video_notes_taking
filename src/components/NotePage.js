import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./NotePage.module.css";
import VideoPlayer from "./VideoPlayer";
import parse from "../utils/htmlTextParser";

const NotePage = () => {
  const location = useLocation();
  const { videoProps = {} } = location.state || {};
  const {
    videoId = "",
    title = "title",
    channelTitle = "channel title",
    description = "description",
  } = videoProps;

  const [category, setCategory] = useState("");

  const newtitle = parse(title);

  const getCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main>
      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        style={{ width: "380px" }}
      >
        <div
          className={`px-2 list-group list-group-flush ${styles.scrollarea}`}
        >
          <div
            className="list-group-item list-group-item-action py-3 lh-tight my-2 shadow-sm"
            style={{
              borderRadius: "10px",
              backgroundColor: "#f6f6f6",
              cursor: "pointer",
            }}
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Time stamp</strong>
              <button
                type="button"
                className="btn-close"
                style={{
                  backgroundColor: "#e8e8e8",
                }}
              />
            </div>
            <div className="col-10 mb-1 small text-truncate">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <VideoPlayer videoId={videoId} />
          <div className="w-25 d-flex flex-column align-items-start">
            <div className="card border-secondary my-3">
              <div className="card-header">Video id: {videoId}</div>
              <div className="card-body">
                <h5 className="card-title">{newtitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {channelTitle}
                </h6>
                <p className="card-text"> {description}</p>
              </div>
            </div>
            <form className="Container">
              <label htmlFor="category" className="form-label">
                Select a category
              </label>
              <select
                className="form-select"
                onChange={getCategory}
                value={category}
                id="category"
              >
                <option value="css">css</option>
                <option value="react">react</option>
                <option value="javascript">javascript</option>
              </select>
              <label htmlFor="category" className="form-label">
                Select a category
              </label>
              <select
                className="form-select"
                onChange={getCategory}
                value={category}
                id="category"
              >
                <option value="css">css</option>
                <option value="react">react</option>
                <option value="javascript">javascript</option>
              </select>
            </form>
          </div>
        </div>
        <div className="row d-flex justify-content-start mt-3">
          {/* <div className="col col-md-3" style={{ backgroundColor: "yellow" }}>
            fgdfgfdgdf
          </div> */}

          {/* <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <button type="submit" class="btn btn-primary mb-3">
            Confirm identity
          </button> */}
        </div>
      </div>
    </main>
  );
};

export default NotePage;
