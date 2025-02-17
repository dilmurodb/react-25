import { useState } from 'react'
import LocationItem from './LocationItem'


export default function DetailsItem ({ data }) {

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
                    'minus'
                    }>
                    {data.children[0].children[0].label}
            </li>
            { !toggle ? <LocationItem data={data} /> : null}
           </>
}