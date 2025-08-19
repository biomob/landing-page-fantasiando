"use client";

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useMemo } from "react";

interface HtmlFontSizeContextProps {
  htmlFontSize: number;
  setHtmlFontSize: Dispatch<SetStateAction<number>>;
}

const HtmlFontSizeContext = createContext<HtmlFontSizeContextProps | undefined>(undefined);

interface HtmlFontSizeProviderProps {
  children: ReactNode;
}

export const HtmlFontSizeProvider: React.FC<HtmlFontSizeProviderProps> = ({ children }) => {
  const [htmlFontSize, setHtmlFontSize] = useState(16);

  const contextValue = useMemo(() => {
    return {
      htmlFontSize,
      setHtmlFontSize,
    };
  }, [htmlFontSize]);

  return <HtmlFontSizeContext.Provider value={contextValue}>{children}</HtmlFontSizeContext.Provider>;
};

export const useHtmlFontSize = () => {
  const context = useContext(HtmlFontSizeContext);
  if (!context) {
    throw new Error("useHtmlFontSize must be used within a HtmlFontSizeProvider");
  }
  return context;
};
