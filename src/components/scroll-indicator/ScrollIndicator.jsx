import './ScrollIndicator.css'
import { useState, useEffect } from 'react'


export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            if (!response.ok) throw Error('Did not receive expected data!')
            const items = await response.json()
            setData(items)
            setErrorMsg(null)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    console.log(data)

    return <div className="scroll-indicator">Scroll Indicator component</div>
}