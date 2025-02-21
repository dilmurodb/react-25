import './LightDarkMode.css'
import useLocalStorage from './useLocalStorage'
import { useState } from 'react'


export default function LightDarkMode () {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const handleThemeChange = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
        
    }

    return <div className="light-dark-mode" data-theme={theme}>
                <div>
                    <h1>Light Dark Mode component!</h1>
                    <p>Hello World!</p>
                    <button onClick={handleThemeChange}>Change Theme</button>
                </div>
           </div>
}