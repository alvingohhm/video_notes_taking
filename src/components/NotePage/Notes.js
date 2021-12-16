import React from "react";

const Notes = () => {
  return (
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
        Some placeholder content in a paragraph below the heading and date.
      </div>
    </div>
  );
};

export default Notes;
