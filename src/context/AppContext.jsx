import { createContext } from "react";

export const AppContext = createContext({});

const AppProvider = ({children}) => {

    const remove = "jr rjnr"


    return (
        <AppContext.Provider value={{remove}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider