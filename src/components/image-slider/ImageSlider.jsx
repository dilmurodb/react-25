import './ImageSlider.css'
import { useState, useEffect } from 'react'


export default function ImageSlider({ url, limit=5, page=1 }) {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchImages = async () => {
        try {
            const data = await fetch(`${url}?page=${page}&limit=${limit}`)
            if (!data.ok) throw Error('Did not receive expected data')
            const response = await data.json()
            setIsLoading(true)
            setImages(response)
            setErrorMsg(null)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchImages()
    }, [url])
    console.log(images)

    return <div className="image-slider">
                {isLoading ? <div>Data is Loading</div> : null}
                {errorMsg ? <div>{`There is an error: ${errorMsg}`}</div> : null}
           </div>
}