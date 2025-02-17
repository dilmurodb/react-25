import './LoadMoreData.css'
import { useState, useEffect } from 'react'


export default function LoadMoreData({ url, limit, skip }) {
    
    // const [data, setData] = useState()
    const [arrayData, setArrayData] = useState([])
    const [skipNum, setSkipNum] = useState(skip)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)

    const handleSkipNum = () => {
        let curNum = skipNum
        let newSkipNum = Number(curNum) + 20
        // console.log(typeof(newSkipNum))
        let strNewSkipNum = newSkipNum.toString() 
        // console.log(typeof(strNewSkipNum))
        setSkipNum(strNewSkipNum)
    }

    const fetchItems = async () => {
        try {
            const response = await fetch(`${url}?limit=${limit}&skip=${skipNum}&select=title,price`)
            if (!response.ok) throw Error('Did not receive expected data')
            const data = await response.json()
            // setData(data)
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

    // console.log(data)
    // console.log(typeof(skipNum))
    // console.log(arrayData)

    return <div className='load-more-data'>
            <div className='data-content'>
                {isLoading ?
                <div>Data is Loading...</div> 
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
                {/* {
                    data && data.products.length > 0 ?
                    data.products.map(item =>
                    (<div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>)
                    )
                    : 
                    null
                } */}
            </div>
            <button disabled={arrayData.length >= 99 ? true : false } onClick={handleSkipNum}>Load more items</button>
           </div>
}