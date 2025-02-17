import './TreeView.css'
import MenuItem from './MenuItem'


export default function MenuList ({ data }) {
    return <ul>
              {
                data && data.length > 0 ?
                data.map((item, index) => (
                    <MenuItem 
                            key={index}
                            data={item}
                    />
                ))
                 :
                null
              }
           </ul>
}