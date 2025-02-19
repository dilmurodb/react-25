import { useState } from 'react'
import './TreeView.css'
import MenuList from './MenuList'


export default function MenuItem ({ item }) {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return <li>
                {
                    item.label
                }
                {
                    item && item.children && item.children.length > 0
                        ?
                    <span onClick={handleClick}>{toggle ? '+' : '-'}</span>
                        :
                    null
                }
                {
                    item && item.children && item.children.length > 0
                        ? 
                    <MenuList 
                        data={item.children}
                    />
                        : 
                    null
                }
           </li>
}