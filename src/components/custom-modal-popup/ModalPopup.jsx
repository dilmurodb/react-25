


export default function ModalPopup({ 
                                handleModalPopup, 
                                currentPopup, 
                                handleStartClick, 
                                clickStart, 
                                handleNextClick, 
                                handlePreviousClick
                             }) {
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
                    <span onClick={() => handlePreviousClick(currentPopup.id)} className="modal-popup-less-than">&lt;</span>
                    <div className="modal-popup-body-content-container">
                        <div>
                          {
                            currentPopup.image 
                                ?
                            <img src={currentPopup.image} />
                                :
                            <img src="/" alt="image"/>
                            }  
                        </div>
                        <div>
                          {
                            currentPopup.company
                                ?
                            <p>Company Name: {currentPopup.company.name}</p>
                                :
                            <p>Company Name:</p>
                            }
                          {
                            currentPopup.company
                                ?
                            <p>Job position: {currentPopup.company.title}</p>
                                :
                            <p>Job position:</p>
                            }
                          {
                            currentPopup.company
                                ?
                            <p>Department: {currentPopup.company.department}</p>
                                :
                            <p>Department:</p>
                            }
                          {
                            currentPopup.university
                                ?
                            <p>Education:  {currentPopup.university}</p>
                                :
                            <p>Education: </p>
                            }
                        </div>
                    </div>
                    {
                       clickStart
                            ?
                        <span onClick={() => handleNextClick(currentPopup.id)} className="modal-popup-greater-than">&gt;</span>
                            :
                        <span onClick={() => handleStartClick(currentPopup.id)} className="modal-popup-greater-than">Start&gt;</span>
                    }
                </div>
                <div className="modal-popup-footer">
                    { currentPopup.phone
                        ?
                    <p>Phone: {currentPopup.phone}</p>
                        :
                    <p>Phone:</p>
                    }
                    { currentPopup.email
                        ?
                    <p>Email: {currentPopup.email}</p>
                        :
                    <p>Email:</p>
                    }
                </div>
            </div>
}