import { useState, useEffect } from 'react';

function getWindowDimensions() {
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  const adjustedHeight = window.innerHeight - 70;
  const modalHeight = window.innerHeight;
  const modalWidth = window.innerWidth - 450;
  return {
    width,
    height,
    modalHeight,
    modalWidth,
    adjustedHeight
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}