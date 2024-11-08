import React, { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkMode(false)
    }
  }, [])

    return (
    <DarkModeContext.Provider value= {{ isDarkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider