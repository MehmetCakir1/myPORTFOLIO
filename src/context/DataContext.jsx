import React, {  createContext, useEffect } from 'react'
import { useState } from 'react'


export const DataContext=createContext()

export const getStorageTheme = () => {
  let theme= "light-theme";
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};


const DataContextProvider = ({children}) => {

  const [theme,setTheme]=useState(getStorageTheme())

  const changeTheme=()=>{
    if (theme === 'light-theme') {
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
}

useEffect(() => {
  //in order to give class to root element and store it in the local storage
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}, [theme]);

  return (
    <DataContext.Provider value={{theme,setTheme,changeTheme}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider