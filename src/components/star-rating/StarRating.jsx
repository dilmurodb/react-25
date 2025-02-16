import './StarRating.css'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'


export default function StarRating({numOfStars = 5}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleMouseClick = (index) => {
        setRating(index)
    }

    const handleMouseEnter = (index) => {
        setHover(index)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }

    return <div className="star-rating">
                {
                    [...Array(numOfStars)].map((_, index) => {
                        index += 1
                        return <FaStar
                                    className={ index <= (hover || rating) ? 'active' : 'inactive'}
                                    key={index}
                                    onClick={() => handleMouseClick(index)}
                                    onMouseMove={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave()}
                                    size={40} />
                    })
                }
           </div>
}