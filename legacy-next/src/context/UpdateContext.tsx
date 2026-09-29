"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface UpdateContextType {
  triggerUpdate: () => void;
  updateKey: number;
}

const UpdateContext = createContext<UpdateContextType | undefined>(undefined);

export const UpdateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [updateKey, setUpdateKey] = useState(0);

  const triggerUpdate = useCallback(() => {
    setUpdateKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <UpdateContext.Provider value={{ triggerUpdate, updateKey }}>
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdate = () => {
  const context = useContext(UpdateContext);
  if (!context) {
    throw new Error("useUpdate must be used within an UpdateProvider");
  }
  return context;
};
