


export default function Tab({ data, currentTab, handleClick }) {
    return <div className="tab-wrapper">
                <div className="tab-container">
                  {
                    data.map(item => 
                            <div onClick={() => handleClick(item.id)}
                                className="tab" key={item.id}>{item.title}</div>)
                }  
                </div>
                <div className="tab-content">
                    {currentTab}
                </div>
           </div>
}