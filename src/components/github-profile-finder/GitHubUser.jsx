


export default function GitHubUser({ user }) {
    
    const { avatar_url, created_at, html_url, name, login, public_repos } = user

    const createdDate = new Date(created_at)

    return <div className="github-user">
                <div>
                    <img className="github-user-img" src={avatar_url} />
                    <p>Account creation date: {`${createdDate.getDate()}
                                                 ${createdDate.toLocaleString('de-de', {month: 'short'})} 
                                                 ${createdDate.getFullYear()}`}
                    </p>
                    <p>Account url: {html_url}</p>
                    <p>Name: {name || login}</p>
                    <p>Amount of public repositories: {public_repos}</p>   
                </div>
           </div>
}