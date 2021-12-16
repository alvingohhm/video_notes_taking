import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./NotePage.module.css";
import VideoPlayer from "../VideoPlayer";
import parse from "../../utils/htmlTextParser";
import Notes from "./Notes";
import InfoCard from "./InfoCard";
import VideoContext from "../../context/video_context";

const NotePage = () => {
  //location props from link to
  const location = useLocation();
  const { videoProps = {} } = location.state || {};
  const {
    videoId = "",
    title = "title",
    channelTitle = "channel title",
    description = "description",
  } = videoProps;

  const [playerObj, setPlayerObj] = useState(null); //player object pass from videoPlayer.js
  const [categoryList, setCategoryList] = useState(["css", "html", "react"]);

  // parsse title with html symbol into text. using parse function from utils
  const newtitle = parse(title);

  const optionList = categoryList.map((item, index) => {
    return <option value={item}>{item}</option>;
  });

  useEffect(() => {}, [categoryList]);

  // const getCategory = (event) => {
  //   setCategory(event.target.value);
  // };

  const handleGetTime = () => {
    console.log(playerObj.getCurrentTime());
    playerObj.seekTo(4124);
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
          <Notes />
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <VideoContext.Provider value={{ setPlayerObj }}>
            <VideoPlayer videoId={videoId} />
          </VideoContext.Provider>
          <div className="w-25 d-flex flex-column align-items-start justify-content-evently">
            <InfoCard
              hasTitle={true}
              hasSubTitle={true}
              header={`Video id: ${videoId}`}
              title={newtitle}
              subTitle={channelTitle}
              description={description}
              darkTheme={false}
            />
            <InfoCard
              hasTitle={false}
              hasSubTitle={false}
              header={`Notes @ TimeStamp `}
              description={description}
              darkTheme={true}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-start mt-3">
          <div className="col-md-9  border-top border-bottom pb-3">
            <div className="d-flex flex-column mt-3">
              <div className="form-floating align-self-stretch">
                <textarea
                  className="form-control"
                  placeholder="Bookmark your notes here"
                  id="notesTextArea"
                  style={{ height: "200px" }}
                ></textarea>
                <label htmlFor="notesTextArea">Key in your notes here:</label>
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-3 align-self-start"
              >
                Add Notes
              </button>
            </div>
          </div>
          <div
            className="col-md-3 border-top border-bottom"
            style={{ backgroundColor: "#F0F0F0" }}
          >
            <div className="input-group mb-3 mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Add a category to dropdown"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Add
              </button>
            </div>
            <label htmlFor="floatingInputInvalid">Select a category</label>
            <select className="form-select" aria-label="Default select example">
              {optionList}
            </select>
            <div className="form-floating mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                Add tag name seperate by commas
              </label>
              <button
                className="btn btn-warning mt-3"
                type="button"
                id="button-addon2"
              >
                Save as favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotePage;
