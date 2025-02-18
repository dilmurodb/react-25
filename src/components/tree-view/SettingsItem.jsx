import { useState } from 'react'


export default function SettingsItem ({ data }) {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return <>{data.children.map((item, index) => 
                <>
                    {item.children ? 
                    <li 
                        key={index}
                        onClick={handleClick}
                        className={ toggle
                            ?
                        'plus'
                            :
                        'minus'
                        }
                    >
                        {item.label}
                    </li>
                    :
                    <li key={index}>
                        {item.label}
                    </li>}
                </>
            )}
           </>
}