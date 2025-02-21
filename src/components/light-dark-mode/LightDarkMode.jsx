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

    return <div className={theme === 'light' ? 'l-d-mode-l-bck' : 'l-d-mode-d-bck'}>
                <div>
                    <h1 className={theme === 'light' ? 'l-d-mode-l-h1' : 'l-d-mode-d-h1'}>Light Dark Mode component!</h1>
                    <p className={theme === 'light' ? 'l-d-mode-l-p' : 'l-d-mode-d-p'}>Hello World!</p>
                    <button className={theme === 'light' ? 'l-d-mode-l-btn' : 'l-d-mode-d-btn'} onClick={handleThemeChange}>Change Theme</button>
                </div>
           </div>
}