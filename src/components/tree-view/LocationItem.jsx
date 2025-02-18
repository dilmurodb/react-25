
export default function LocationItem ({ data }) {

    return <li>
                {data.children[0].children[0].children[0].label}
           </li>
}