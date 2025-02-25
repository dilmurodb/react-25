import './ProfileFinder.css'
import GitHubUser from './GitHubUser'
import { useState, useEffect } from 'react'


export default function ProfileFinder({ url }) {

    const [data, setData] = useState()
    const [userName, setUserName] = useState('dilmurodb')
    const [userNameTest, setUserNameTest] = useState('dilmurodb')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchGitHubData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${url}${userName}`)
            if (!response.ok) throw Error('Did not receive expected data')
            const res = await response.json()
            console.log(res)
            setData(res)
            setErrorMsg(null)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userNameTest)
        setUserName(userNameTest)
    }

    useEffect(() => {
        fetchGitHubData()
    }, [userName])

    console.log(data)
    console.log(userNameTest)

    return <div className="github-profile-finder">
                GitHub Profile Finder Component
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search">Search</label>
                  <input
                    name="submitted-username"
                    id="search"
                    type="text"
                    placeholder="Enter user name"
                    value={userNameTest}
                    onChange={(e) => setUserNameTest(e.target.value)} 
                    />  
                  <button type="submit">Search</button>  
                </form>
                <GitHubUser
                        data={data} />
           </div>
}