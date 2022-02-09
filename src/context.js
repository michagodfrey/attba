import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // loading animation 
    // const [isloading, setIsLoading] = useState(true);

    // open and close the modals
    const [isStateModalOpen, setIsStateModalOpen] = useState(false);
    const [modal, setModal] = useState("");

    const openStateModal = (state) => {
        setIsStateModalOpen(true);
        setModal(state);
    }

    const closeStateModal = () => {
        setIsStateModalOpen(false);
    }

    return (
      <AppContext.Provider value={{ isStateModalOpen, openStateModal, closeStateModal, modal }}>
          {children}
      </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };