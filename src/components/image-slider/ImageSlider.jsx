import './ImageSlider.css'
import { useState, useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


export default function ImageSlider({ url, limit=5, page=1 }) {

    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchImages = async () => {
        try {
            const data = await fetch(`${url}?page=${page}&limit=${limit}`)
            if (!data.ok) throw Error('Did not receive expected data')
            const response = await data.json()
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
   
    const handlePrevious = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
    }
    const handleNext = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1 )
    }

    return <div className="image-slider">
                {isLoading ? <div>Data is Loading</div> : null}
                {errorMsg ? <div>{`There is an error: ${errorMsg}`}</div> : null}
                <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
                {
                    images && images.length ? images.map((image, index) => 
                    <img 
                         key={image.id}
                         src={image.download_url}
                         alt={image.author}
                         className = {currentImage === index ?
                            'current-image'
                              : 
                            'current-image hide-current-image'} />)
                         :
                         null
                }
                <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
                <span className="circle-indicators">
                    { images && images.length ?
                        images.map((_, index) => (
                            <button key={index} className={currentImage === index ?
                                'current-indicator'
                                  : 
                                'current-indicator inactive-indicator'}
                                onClick={() => setCurrentImage(index)}></button>
                        )) :
                        null}
                </span>
           </div>
}