import React from "react";
import "../styles.css";
import image from "../kanye/icon.png";
import dl from "./dl.png";

const Button = ({ handleQuote, handleDownload }) => {
  return (
    <div className="action flex-row">
      <div
        className="button"
        onClick={handleQuote}
        role="button"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "120%" }}
      ></div>

      <div
        className="button"
        id="download"
        onClick={handleDownload}
        role="button"
        style={{ backgroundImage: `url(${dl})`, backgroundSize: "120%" }}
      ></div>
    </div>
  );
};

export default Button;