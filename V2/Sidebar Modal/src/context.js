import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const setSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const setModal = () => {
        setShowModal(!showModal);
    };

    const globalParameters = {
        showSidebar,
        setSidebar,
        showModal,
        setModal
    };

    return <AppContext.Provider value={globalParameters}>
        {children}
    </AppContext.Provider>
};

//custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export {useGlobalContext, AppProvider};