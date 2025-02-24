import './CustomTabs.css'
import Tab from './Tab'
import { useState } from 'react'


export default function CustomTabs() {

    const [currentTab, setCurrentTab] = useState('')

    const handleClick = (id) => {
        const currentContentObj = data.filter(item => item.id === id)
        const currentContent = currentContentObj[0].content
        setCurrentTab(currentContent)
    }

    const data = [
        {
            id: 1,
            title: 'Tab 1',
            content: 'Content for Tab 1'
        },
        {
            id: 2,
            title: 'Tab 2',
            content: 'Content for Tab 2'
        },
        {
            id: 3,
            title: 'Tab 3',
            content: 'Content for Tab 3'
        }
    ]

    return <div className="custom-tabs">
                <Tab data={data}
                     currentTab={currentTab}
                     handleClick={handleClick} />
           </div>
}