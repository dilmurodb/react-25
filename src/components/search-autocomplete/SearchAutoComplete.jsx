import './SearchAutoComplete.css'
import { useState, useEffect } from 'react'


export default function SearchAutoComplete({ url }) {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchUsers = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            if (!response.ok) throw Error('Did not receive expected data')
            const res = await response.json()
            console.log(res)
            let usersArray = res.users
            setUsers(usersArray)
            setErrorMsg(null)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [url])


    return <div className="search-autocomplete">
                Search Auto Complete Component
                <ul>
                    {
                        users.map(user => <li key={user.id}>{user.firstName} {user.lastName}</li>)
                    }
                </ul>
           </div>
}