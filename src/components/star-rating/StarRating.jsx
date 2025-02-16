import './StarRating.css'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'


export default function StarRating({numOfStars = 5}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleMouseClick = (index) => {
        console.log(index)
    }

    const handleMouseEnter = (index) => {
        console.log(index)
    }

    const handleMouseLeave = (index) => {
        console.log(index)
    }

    return <div className="star-rating">
                {
                    [...Array(numOfStars)].map((_, index) => {
                        index += 1
                        return <FaStar
                                    key={index}
                                    onClick={() => handleMouseClick(index)}
                                    onMouseMove={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    size={40} />
                    })
                }
           </div>
}