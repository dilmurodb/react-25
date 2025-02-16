import './RandomColor.css'
import { useState } from 'react'


export default function RandomColor() {

    const [color, setColor] = useState('')

    const handleHexColGen = () => {

    }
    const handleRgbColGen = () => {

    }
    const handleRandomColGen = () => {

    }

    return <div className="random-color">
             <button onClick={handleHexColGen}>HEX Color</button>
             <button onClick={handleRgbColGen}>RGB Color</button>
             <button onClick={handleRandomColGen}>Random Color</button>
           </div>
}