import './LoadMoreData.css'
import { useState, useEffect } from 'react'


export default function LoadMoreData({ url, limit, skip }) {
    
    const [arrayData, setArrayData] = useState([])
    const [skipNum, setSkipNum] = useState(skip)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)

    const handleSkipNum = () => {
        let currentSkipNum = skipNum
        let newSkipNum = Number(currentSkipNum) + 20
        let strNewSkipNum = newSkipNum.toString() 
        setSkipNum(strNewSkipNum)
    }

    const fetchItems = async () => {
        try {
            const response = await fetch(`${url}?limit=${limit}&skip=${skipNum}&select=title,price`)
            if (!response.ok) throw Error('Did not receive expected data')
            const data = await response.json()
            let destData = data.products
            let newData = arrayData.concat(destData)
            setArrayData(newData)
            setErrorMsg(null)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchItems()
    }, [url, skipNum])


    return <div className='load-more-data'>
            <div className='data-content'>
                {isLoading ?
                <div className="is-loading">Data is Loading...</div> 
                : 
                null}
                {errorMsg ?
                <div>{errorMsg}</div> 
                : 
                null}
                {
                    arrayData && arrayData.length > 0 ?
                    arrayData.map(item =>
                    (<div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>)
                    )
                    : 
                    null
                }
            </div>
            <button disabled={arrayData.length >= 99
                 ?
                true 
                 : 
                false}
                onClick={handleSkipNum}
                >
                    Load more items
                </button>
           </div>
}