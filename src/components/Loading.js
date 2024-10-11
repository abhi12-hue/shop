import React from "react";
import "./Loading.css"; // Import the CSS styles for the loader

const Loading = () => {
  return (
    <div className="loader">
      <div className="cube">
        <div className="side side1"></div>
        <div className="side side2"></div>
        <div className="side side3"></div>
        <div className="side side4"></div>
        <div className="side side5"></div>
        <div className="side side6"></div>
      </div>
    </div>
  );
};

export default Loading;
