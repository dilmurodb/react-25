import './TreeView.css'
import MenuList from './MenuList'
import data from './data'



export default function TreeView () {
    console.log(data)
    return <div className='tree-view'>
            <div className='menu'>
                <MenuList data={data}/>
            </div>
            <div className='page'>Page</div>
           </div>
}