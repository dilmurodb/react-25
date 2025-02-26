import './SearchAutoComplete.css'
import { useState, useEffect } from 'react'


export default function SearchAutoComplete({ url }) {

    const [users, setUsers] = useState([])
    const [searchUser, setSearchUser] = useState('')
    const [matchingUsers, setMatchingUsers] = useState([])
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

    const handleSearch = (value) => {
        setSearchUser(value)
        console.log(value)
        const newArr = users.map(user => user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase())
        if (value.length > 1) {
           let matchArr = newArr.filter(item => item.indexOf(value.toLowerCase()) > -1)
            setMatchingUsers(matchArr) 
        } else if (value.length < 1) {
            setMatchingUsers([])
        }
        
    }

    useEffect(() => {
        fetchUsers()
    }, [url])


    return <div className="search-autocomplete">
                Search Auto Complete Component
                <input 
                    type='text'
                    placeholder='search...'
                    value={searchUser}
                    onChange={(e) => handleSearch(e.target.value)}/>
                {
                    isLoading ? <h3>Data is Loading...</h3> : null
                }
                {
                    errorMsg ? <h3>{errorMsg}</h3> : null
                }
                {
                    matchingUsers
                        ?
                    <ul>
                        {matchingUsers.map((matchingUser, index) => <li key={index}>{matchingUser}</li>)}
                    </ul>
                        :
                    null
                }
           </div>
}