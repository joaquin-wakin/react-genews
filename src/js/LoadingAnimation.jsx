import React from "react";

const LoadingAnimation = (props) => {
  return (
    <div className="loading-spinner__container">
      <div className="loading-spinner__spinner"></div>
      <p>{props.text}</p>
    </div>
  );
};

export default LoadingAnimation;
