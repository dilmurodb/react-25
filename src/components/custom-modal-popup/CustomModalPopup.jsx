import './CustomModalPopup.css'
import ModalPopup from './ModalPopup'
import { useState, useEffect } from 'react'


export default function CustomModalPopup({ url }) {

    const [modalPopup, setModalPopup] = useState(false)
    const [currentPopup, setCurrentPopup] = useState([])
    const [clickStart, setClickStart] = useState(false)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchItems = async () => {
        setIsLoading(true)
        try {
          const response = await fetch(url)
          if (!response.ok) throw Error('Did not receive expected data!')
          const items = await response.json()  
          setErrorMsg(false)
          const itemsArray = items.users
          setData(itemsArray)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
        }
        
    }

    useEffect(() => {
        if (modalPopup) {
            fetchItems()
        }
    }, [modalPopup])

    const handleModalPopup = () => {
        setModalPopup(!modalPopup)
    }

    const handleStartClick = (id) => {
        setClickStart(true)
        setCurrentPopup(data[0])
    }

    const handleNextClick = (id) => {
        setCurrentPopup(data[id])
    }

    const handlePreviousClick = (id) => {
      
    }

    return <div className="custom-modal-popup">
                {/* {
                    !modalPopup && <h1>Custom Modal Popup component!</h1>
                } */}
                <div className="h1-and-btn-container">
                    <h1>Custom Modal Popup component!</h1>
                    <button className="custom-modal-popup-btn" onClick={handleModalPopup}>Show Modal Popup</button>
                </div>
                {
                    isLoading ? <p>The Data is Loading...</p> : null
                }
                {
                    errorMsg ? <p>{errorMsg}</p> : null
                }
                {/* {
                    !modalPopup && <button className="custom-modal-popup-btn" onClick={handleModalPopup}>Show Modal Popup</button>
                } */}
                <div className="modal-popup-section">
                  {
                    modalPopup && <ModalPopup
                                         handleStartClick={handleStartClick}
                                         clickStart={clickStart}
                                         handleModalPopup={handleModalPopup}
                                         currentPopup={currentPopup}
                                         handleNextClick={handleNextClick}
                                         handlePreviousClick={handlePreviousClick}
                                          />
                  }  
                </div>
                
           </div>
}