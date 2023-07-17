import React from "react";
import "../styles.css";
import Header from "./Header";

const Quote = ({ quoteText, printRef }) => {
  return (
    <div className="container flex" ref={printRef}>
      <Header />
      <div className="quote-container">{quoteText}</div>
      <p id="tweet-details">1:43 PM • June 8, 1977 • Twitter for Landline </p>
    </div>
  );
};

export default Quote;