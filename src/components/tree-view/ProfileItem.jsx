import { useState } from 'react'
import DetailsItem from './DetailsItem'


export default function ProfileItem ({ data }) {

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
                    {data.children[0].label}
            </li>
            {!toggle ? <DetailsItem data={data} /> : null}
           </>
}