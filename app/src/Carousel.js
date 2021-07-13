import React, { useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Earn",
  "Create",
  "Mint",
  "Trade"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.default }
      />
    </h1>
  );
};

export default Carousel;