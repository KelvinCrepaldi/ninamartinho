import { BackgroundContainer } from "./Background.styles";
import React, { useRef, useEffect, useState } from "react";

const Background = ({ speed = 0.5, bgImage }) => {
  const ref = useRef(null);
  const [posY, setPosY] = useState("0");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      ref.current.style.backgroundPositionY = `-${scrollTop * speed}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  return (
    <BackgroundContainer ref={ref} bgImage={bgImage}></BackgroundContainer>
  );
};

export default Background;
