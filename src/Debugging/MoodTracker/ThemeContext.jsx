import React, {createContext, useContext, useState} from "react";

const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)
    const toggleTheme = () => {
        setDarkMode((prevDarkMode) => {
            console.log("toggled")
            return !prevDarkMode
        })
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>

    )
}