import React from "react";

const InfoCard = (props) => {
  const {
    hasTitle,
    hasSubTitle,
    header,
    title,
    subTitle,
    description,
    darkTheme,
  } = props;
  return (
    <div
      className={`card border-secondary mt-3 w-100 ${
        darkTheme ? "text-white bg-dark" : null
      }`}
    >
      <div className="card-header"> {header}</div>
      <div className="card-body">
        {hasTitle && <h5 className="card-title">{title}</h5>}
        {hasSubTitle && (
          <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
        )}
        <p className="card-text"> {description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
