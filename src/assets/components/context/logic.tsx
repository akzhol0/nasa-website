import React, { createContext } from "react";

type ContextProps = {
  apiKey: string;
};

export const contextData = createContext({} as ContextProps);

type ContextOverAllProps = {
  children: React.ReactNode;
};

export function ContextOverAll({ children }: ContextOverAllProps) {
  const apiKey = 'cD6cdU0pihCkVRIWanf46lR95MCG8tpQ7Ch5cz8i';

  return (
    <contextData.Provider value={{
      apiKey
    }}>
      {children}
    </contextData.Provider>
  );
}