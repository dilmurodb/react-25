


export default function ModalPopup({ handleModalPopup, data, currentPopup, handleNextClick, handlePreviousClick }) {
    return <div className="modal-popup-container">
                <div className="modal-popup-header">
                    <div className="modal-popup-header-h2">
                        {
                           currentPopup.firstName 
                                ? 
                            <h2>{currentPopup.firstName} {currentPopup.lastName}</h2>
                                :
                            <h2>Full Name</h2>
                        } 
                    </div>
                    <div className="modal-popup-header-span">
                        <span onClick={handleModalPopup} className="modal-popup-x">&times;</span>
                    </div>
                </div>
                <div className="modal-popup-body">
                    <span onClick={handlePreviousClick} className="modal-popup-less-than">&lt;</span>
                    <p>Body</p>
                    <span onClick={handleNextClick} className="modal-popup-greater-than">&gt;</span>
                </div>
                <div className="modal-popup-footer">
                    <p>Footer</p>
                </div>
            </div>
}