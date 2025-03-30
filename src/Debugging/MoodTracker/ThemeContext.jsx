import React, {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem("darkMode")
        return stored ? JSON.parse(stored) : false
    })

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
    }, [darkMode])
    
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