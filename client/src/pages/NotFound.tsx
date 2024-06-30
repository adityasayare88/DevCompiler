import React from "react";
import './pageStyles/NotFound.css'; // Import your CSS file

interface AnimatedGifProps {
  src: string;
  alt: string;
}

const AnimatedGif: React.FC<AnimatedGifProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="max-w-full max-h-full" />;
};

const NotFound: React.FC = () => {
  return (
    <div className="center-container">
      <AnimatedGif 
        src="https://64.media.tumblr.com/097f92b95c4c30b514a3aaac0de13543/d13fef8532575d2d-32/s400x600/d6903d235b32558e075d4300033a95766833d87e.gifv" 
        alt="404 - Page Not Found" 
      />
    </div>
  );
};

export default NotFound;
