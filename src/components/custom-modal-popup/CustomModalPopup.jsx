import './CustomModalPopup.css'
import ModalPopup from './ModalPopup'
import { useState } from 'react'


export default function CustomModalPopup() {

    const [modalPopup, setModalPopup] = useState(false)

    const handleModalPopup = () => {
        setModalPopup(!modalPopup)
    }

    return <div className="custom-modal-popup">
                {/* {
                    !modalPopup && <h1>Custom Modal Popup component!</h1>
                } */}
                <div className="h1-and-btn-container">
                    <h1>Custom Modal Popup component!</h1>
                    <button className="custom-modal-popup-btn" onClick={handleModalPopup}>Show Modal Popup</button>
                </div>
                {/* {
                    !modalPopup && <button className="custom-modal-popup-btn" onClick={handleModalPopup}>Show Modal Popup</button>
                } */}
                <div className="modal-popup-section">
                  {
                    modalPopup && <ModalPopup handleModalPopup={handleModalPopup} />
                  }  
                </div>
                
           </div>
}