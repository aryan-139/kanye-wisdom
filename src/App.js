import React, { useState } from "react";

import "./styles.css";
import image from "./kanye/3.jpg";
import html2canvas from "html2canvas";
import Quote from "./components/Quote";
import Button from "./components/Button";

export default function App() {
  const printRef = React.useRef();
  const [quoteText, setQuoteText] = useState("Yank the compass!");

  function handleQuote() {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((json) => {
        setQuoteText(json.quote);
      });
  }

  const handleDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      allowTaint: false,
      useCORS: true
    });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div
      className="App flex-col"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "80%" }}
    >
      <Quote quoteText={quoteText} printRef={printRef} />
      <Button handleQuote={handleQuote} handleDownload={handleDownload} />
    </div>
  );
}