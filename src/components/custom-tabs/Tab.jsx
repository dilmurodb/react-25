


export default function Tab({ data }) {
    return <div className="tab-container">
                {
                    data.map(item => <div className="tab" key={item.id}>{item.title}</div>)
                }
           </div>
}