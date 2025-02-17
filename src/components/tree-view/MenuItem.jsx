import './TreeView.css'
import { useState } from 'react'
import ProfileItem from './ProfileItem'
import SettingsItem from './SettingsItem'


export default function MenuItem ({ data }) {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return <>
                { data.children 
                    ?
                <>
                    <li onClick={handleClick} 
                    className={ toggle 
                        ?
                    'plus'
                        :
                    'minus'}
                    >
                        {data.label}
                    </li>
                    {
                        data.children && !toggle && data.label === 'Profile'
                             ? 
                        <ProfileItem data={data} />
                             : 
                        null
                    }
                    {
                        data.children && !toggle && data.label === 'Settings' 
                            ? 
                        <SettingsItem data={data} /> 
                            : 
                        null
                    }
                </>
                    :
                <li>
                    {data.label}
                </li>
                }
           </>
}