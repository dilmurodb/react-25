import './RandomColor.css'
import { useState } from 'react'


export default function RandomColor() {

    const [color, setColor] = useState('')

    const handleRandom = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleHexColGen = () => {
        const hexRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let randomHex = '#'
        for ( let i = 0; i < 6; i++) {
            randomHex += hexRange[handleRandom(hexRange.length)]
        }
        setColor(randomHex)
    }
    const handleRgbColGen = () => {
        const r = handleRandom(256)
        const g = handleRandom(256)
        const b = handleRandom(256)
        setColor(`rgb(${r}, ${g}, ${b})`)
    }
    const handleRandomColGen = () => {

    }

    return <div className="random-color" style={{backgroundColor: `${color}`}}>
             <button onClick={handleHexColGen}>HEX Color</button>
             <button onClick={handleRgbColGen}>RGB Color</button>
             <button onClick={handleRandomColGen}>Random Color</button>
           </div>
}