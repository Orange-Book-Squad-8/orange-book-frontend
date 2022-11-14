import { useState, useEffect } from 'react';

const DEFAULT_SCREEN_SIZES = {
  isSmall: true,
  isMedium: false,
  isLarge: false
};

function useScreenSizeObserver() {
  const [screenSizes, setScreenSizes] = useState(DEFAULT_SCREEN_SIZES);

  const defineScreenSizes = () => {
    if (window.innerWidth < 576) {
      setScreenSizes({
        isSmall: true,
        isMedium: false,
        isLarge: false
      });
    } else if (window.innerWidth < 996) {
      setScreenSizes({
        isSmall: false,
        isMedium: true,
        isLarge: false
      });
    } else {
      setScreenSizes({
        isSmall: false,
        isMedium: false,
        isLarge: true
      });
    }
  };

  useEffect(() => {
    defineScreenSizes();
    window.addEventListener('resize', () => defineScreenSizes());

    return window.removeEventListener('resize', () => defineScreenSizes());
  }, []);

  return screenSizes;
}

export default useScreenSizeObserver;
