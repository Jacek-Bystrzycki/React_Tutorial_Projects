import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:"", links:[]});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openSubmenu = (text, coordinates) => {
        setLocation(coordinates);

        const newPage = sublinks.find(link => {
            return text === link.page;
        });
        setPage(newPage);
        setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const props = {
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page
    };

    return <AppContext.Provider value={props}>
        {children}
    </AppContext.Provider>;
};

const useGloblaContext = () => {
    return useContext(AppContext);
};

export {AppProvider, useGloblaContext};
