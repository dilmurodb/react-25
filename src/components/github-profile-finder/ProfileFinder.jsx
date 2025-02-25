import './ProfileFinder.css'
import GitHubUser from './GitHubUser'
import { useState, useEffect } from 'react'


export default function ProfileFinder({ url }) {

    const [userData, setUserData] = useState()
    const [userName, setUserName] = useState('dilmurodb')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchGitHubData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${url}${userName}`)
            if (!response.ok) throw Error('Did not receive expected data')
            const res = await response.json()
            if (res) {
                setUserData(res)
            }
            setErrorMsg(null)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
            setUserName('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchGitHubData()
        setUserName(e.target.value)
    }

    useEffect(() => {
        fetchGitHubData()
    }, [])


    return <div className="github-profile-finder">
                GitHub Profile Finder Component
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search">Search</label>
                  <input
                    name="submitted-username"
                    id="search"
                    type="text"
                    placeholder="Enter user name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} 
                    />  
                  <button type="submit">Search</button>  
                </form>
                {
                    isLoading ? <h3>Data is Loading...</h3> : null
                }
                {
                    errorMsg ? <h3>{errorMsg}</h3> : null
                }
                { userData ? <GitHubUser user={userData} /> : null}
           </div>
}