import {useState, useContext, createContext} from 'react';

const SideBarContext = createContext();

export default function SideBarProvider({children}){
    const [isSideBarOpen, setIsSideBarOpen]=useState(false);

    return (
        <SideBarContext.Provider value={{isSideBarOpen, setIsSideBarOpen}} >
            {children}
        </SideBarContext.Provider>
    )
}

export const useSideBarStatus = ()=>useContext(SideBarContext)