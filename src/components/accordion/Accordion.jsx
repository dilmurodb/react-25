import data from "./data"
import { useState } from 'react'
import './Accordion.css'

export default function Accordion() {

    const [selected, setSelected] = useState(null)
    const [multipleSelected, setMultipleSelected] = useState(null)
    const [multipleSelection, setMultipleSelection] = useState(false)

    const handleClick = (id) => {
        setSelected(id === selected ? null : id)
        
    }

    const handleButtonClick = () => {
        setMultipleSelection(!multipleSelection)
    }

    const handleMultipleSelection = (id) => {
        setMultipleSelected(id)
    }

    return  <div>
                <button onClick={handleButtonClick}>{multipleSelection ? 
                'Disable multiple selection'
                 : 
                'Enable multiple selection'}
                </button>
                <div className="wrapper">
                    <div className="accordion">
                        {data && data.length > 0 
                                ? 
                            multipleSelection 
                                ? 
                            (<div>
                                {data.map(item =>
                                (<div className="item" key={item.id}>
                                    <div className="title" onClick={() => handleMultipleSelection(item.id)}>
                                        <h3>{item.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {/* {multipleSelected && } */}
                                </div>))}
                             </div>
                            )
                                : 
                            data.map(item => 
                            (<div className="item" key={item.id}>
                                <div className="title" onClick={() => handleClick(item.id)}>
                                <h3>{item.question}</h3>
                                <span>+</span>   
                                </div>
                                {selected === item.id ? (<div className="content">{item.answer}</div>) : null}
                            </div>))
                            : 
                            (<div>Data not Found</div>)
                        }
                    </div>
                </div>
            </div>
}