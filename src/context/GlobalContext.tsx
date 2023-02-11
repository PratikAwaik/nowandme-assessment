import { createContext, useContext, useState } from "react";

interface GlobalContextProps {
  isInitialRender: boolean;
  toggleInitialRender: () => void;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const initialState = {
  isInitialRender: true,
  toggleInitialRender: () => {},
};

const GlobalContext = createContext<GlobalContextProps>(initialState);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [isInitialRender, setIsInitialRender] = useState(
    initialState.isInitialRender
  );

  const toggleInitialRender = () => {
    setIsInitialRender(!isInitialRender);
  };

  return (
    <GlobalContext.Provider value={{ isInitialRender, toggleInitialRender }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
