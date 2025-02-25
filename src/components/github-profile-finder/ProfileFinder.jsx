import './ProfileFinder.css'
import GitHubUser from './GitHubUser'
import { useState, useEffect } from 'react'


export default function ProfileFinder({ userName='dilmurodb' }) {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchGitHubData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`)
            if (!response.ok) throw Error('Did not receive expected data')
            const res = await response.json()
            console.log(res)
            setErrorMsg(null)
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchGitHubData()
    }, [])

    return <div className="github-profile-finder">
                GitHub Profile Finder Component
                <GitHubUser />
           </div>
}