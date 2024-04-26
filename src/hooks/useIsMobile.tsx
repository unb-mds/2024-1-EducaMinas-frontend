'use client';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [width, setWidth] = useState(1024);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return width <= 640;
};

export default useIsMobile;
