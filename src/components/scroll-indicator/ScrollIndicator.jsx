import './ScrollIndicator.css'
import { useState, useEffect } from 'react'


export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)

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

    const handleScrollPercentage = () => {
        console.log(
            // `body scroll top`, document.body.scrollTop,
            // `Element scrollTop`, document.documentElement.scrollTop,
            // `Element scrollHeight`, document.documentElement.scrollHeight,
            // `Element clientHeight`, document.documentElement.clientHeight
        )

        const scrolledLength = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight
                                    - 
                        document.documentElement.clientHeight;

        const scrollPercent = (scrolledLength / height) * 100

        setScrollPercentage(scrollPercent)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])
    console.log(scrollPercentage)

    return <div className="scroll-indicator">
                <div className="top-container">
                    <h1>Scroll Indicator component</h1>
                    <div className="scroll-progress-tracking-container">
                        <div className="current-progress-bar" style={{width : `${scrollPercentage}%`}}>
                        </div>
                    </div>
                </div>
                <div className="data-container">
                  {isLoading ? <h3>Data is loading...</h3> : null}
                { errorMsg ? <h3>{errorMsg}</h3> : null}
                {data && data.length > 0
                    ?
                data.map(item => <p key={item.id}>{item.title}</p>)
                    :
                null}  
                </div>
           </div>
}