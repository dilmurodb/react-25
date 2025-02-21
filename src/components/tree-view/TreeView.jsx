import './TreeView.css'
import MenuList from './MenuList'
import data from './data'



export default function TreeView () {
    return <div className='tree-view'>
            <div className='tree-view-menu'>
                <MenuList data={data}/>
            </div>
            <div className='tree-view-page'>Page</div>
           </div>
}