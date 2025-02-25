


export default function ModalPopup({ handleModalPopup }) {
    return <div className="modal-popup-container">
               <div className="modal-popup-header">
                <div className="modal-popup-header-h1">
                   <h1>Header</h1> 
                </div>
                <div className="modal-popup-header-span">
                    <span onClick={handleModalPopup} className="modal-popup-x">&times;</span>
                </div>
               </div>
               <div className="modal-popup-body">
                <span className="modal-popup-less-than">&lt;</span>
                <p>Body</p>
                <span className="modal-popup-greater-than">&gt;</span>
               </div>
               <div className="modal-popup-footer">
                <p>Footer</p>
               </div>
           </div>
}