"use client";

import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction, useMemo } from "react";

interface WindowSizeContextProps {
  width: number | null;
  height: number | null;
  setWidth: Dispatch<SetStateAction<number | null>>;
  setHeight: Dispatch<SetStateAction<number | null>>;
}

const WindowSizeContext = createContext<WindowSizeContextProps | undefined>(undefined);

interface WindowSizeProviderProps {
  children: ReactNode;
}

export const WindowSizeProvider: React.FC<WindowSizeProviderProps> = ({ children }) => {
  const [width, setWidth] = React.useState<number | null>(null);
  const [height, setHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array, so it only runs once on mount and cleans up on unmount
  const contextValue = useMemo(() => {
    return {
      height,
      width,
      setHeight,
      setWidth,
    };
  }, [width, height]);

  return <WindowSizeContext.Provider value={contextValue}>{children}</WindowSizeContext.Provider>;
};

export const useWindowSize = () => {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }
  return context;
};
