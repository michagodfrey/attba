import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isStateModalOpen, setIsStateModalOpen] = useState(false);

    const openStateModal = () => {
        setIsStateModalOpen(true);
    }

    const closeStateModal = () => {
        setIsStateModalOpen(false);
    }

    return (
      <AppContext.Provider value={{ isStateModalOpen, openStateModal, closeStateModal }}>
          {children}
      </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };