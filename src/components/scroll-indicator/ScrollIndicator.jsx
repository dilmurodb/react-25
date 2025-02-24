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
            const itemsArray = items.products 
            setData(itemsArray)
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

    return <div className="scroll-indicator">
                <h1>Scroll Indicator component</h1>
                {isLoading ? <h3>Data is loading...</h3> : null}
                { errorMsg ? <h3>{errorMsg}</h3> : null}
                {data && data.length > 0
                    ?
                data.map(item => <p key={item.id}>{item.title}</p>)
                    :
                null}
           </div>
}