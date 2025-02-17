import './TreeView.css'
import { useState } from 'react'


export default function MenuItem ({ data }) {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return <>
                <li onClick={handleClick} 
                className={ toggle 
                    ?
                'plus'
                    :
                'minus'}
                >
                    {data.label}
                </li>
           </>
}