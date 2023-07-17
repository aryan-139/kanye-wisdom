import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

import "./styles.css";
import image from "./kanye/kanyebg.jpg"
import Quote from "./components/Quote";
import Button from "./components/Button";

export default function App() {
  const printRef = useRef(null);
  const [quoteText, setQuoteText] = useState("If you have the opportunity to play this game called life, you have to appreciate every moment. A lot of people don't appreciate their moment until it's passed");

  const handleQuote = async () => {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();
    console.log(data);
    setQuoteText(data.quote);
    {/**Fetch the data from the API -> Store it in data as JSON -> set the value of quoteText state param with data.quote */}
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(printRef.current, {
      allowTaint: false,
      useCORS: true
    });

    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "quote.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };


  return (
    //wrapping the div with Kanye image as background
    <div
      className="App flex-col"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      {/**Have just 2 components here, that is the quoting of the text and the Handle quotes buttons */}
      <div className="center-container">
        <Quote quoteText={quoteText} printRef={printRef} />
      </div>
      <Button handleQuote={handleQuote} handleDownload={handleDownload} />
    </div>
  );
}
