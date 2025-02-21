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
                    item && item.children && item.children.length > 0
                        ?
                    <span onClick={handleClick}>{item.label}</span>
                        :
                    <span>{item.label}</span>
                }
                {
                    item && item.children && item.children.length > 0
                        ?
                    <span className="plus-minus-sign" onClick={handleClick}>{toggle ? '+' : '-'}</span>
                        :
                    null
                }
                {
                    !toggle && item && item.children && item.children.length > 0
                        ? 
                    <MenuList 
                        data={item.children}
                    />
                        : 
                    null
                }
           </li>
}