


export default function GitHubUser({data}) {
    return <div className="github-user">
                <img className="github-user-img" src={data.avatar_url} />
                <p>{data.created_at}</p>
                <p>{data.html_url}</p>
                <p>{data.name}</p>
                <p>{data.public_repos}</p>
           </div>
}