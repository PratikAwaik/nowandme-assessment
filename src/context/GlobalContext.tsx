import { createContext, useContext, useState } from "react";

interface GlobalContextState {
  isInitialRender: boolean;
  isLoginView: boolean;
  showModal: boolean;
}

interface GlobalContextProps {
  state: GlobalContextState;
  updateState: (updates: Partial<GlobalContextState>) => void;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const initialState = {
  state: {
    isInitialRender: true,
    isLoginView: true,
    showModal: false,
  },
  updateState: () => {},
};

const GlobalContext = createContext<GlobalContextProps>(initialState);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [state, setState] = useState(initialState.state);

  const updateState = (updates: Partial<GlobalContextState>) => {
    const updatedState = { ...state, ...updates } as GlobalContextState;
    setState(updatedState);
  };

  return (
    <GlobalContext.Provider value={{ state, updateState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
