import './TreeView.css'
import { useState } from 'react'
// import ProfileItem from './ProfileItem'
// import SettingsItem from './SettingsItem'
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
                    item.children ? <MenuList data={item.children} /> : null
                }
           </li>
}