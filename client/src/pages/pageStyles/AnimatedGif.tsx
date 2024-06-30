import React from "react";

interface AnimatedGifProps {
  src: string;
  alt: string;
}

const AnimatedGif: React.FC<AnimatedGifProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default AnimatedGif;
