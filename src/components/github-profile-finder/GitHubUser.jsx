


export default function GitHubUser({ user }) {
    
    const { avatar_url, created_at, html_url, name, login, public_repos } = user

    return <div className="github-user">
                <div>
                    <img className="github-user-img" src={avatar_url} />
                    <p>Creation date: {created_at}</p>
                    <p>Account url: {html_url}</p>
                    <p>Name: {name}</p>
                    <p>Amount of public repositories: {public_repos}</p>   
                </div>
           </div>
}