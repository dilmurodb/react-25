import data from "./data"
import { useState } from 'react'

export default function Accordion() {

    const [selected, setSelected] = useState(null)

    const handleClick = (id) => {
        setSelected(id === selected ? null : id)
        
    }

    return <div>{data && data.length > 0 ? data.map(item => 
        (<div key={item.id}>
            <div onClick={() => handleClick(item.id)}>
             <h3>{item.question}</h3>
             <span>+</span>   
            </div>
            {selected === item.id ? (<div>{item.answer}</div>) : null}
        </div>)
        ) : (<div>Data not Found</div>)}</div>
}