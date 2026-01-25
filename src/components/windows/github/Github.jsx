import { useState, useEffect } from 'react';
import MacWindow from '../../macwindow/MacWindow';
import './github.scss';

const Github = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const query = `
                    query {
                        user(login: "abdulkareem25") {
                            name
                            login
                            bio
                            avatarUrl
                            url
                            repositories(first: 6, orderBy: {field: UPDATED_AT, direction: DESC}) {
                                nodes {
                                    name
                                    description
                                    url
                                    primaryLanguage {
                                        name
                                    }
                                    stargazerCount
                                }
                            }
                        }
                    }
                `;

                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                    },
                    body: JSON.stringify({ query })
                });

                const result = await response.json();
                
                if (result.errors) {
                    throw new Error(result.errors[0].message);
                }
                
                setData(result.data.user);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, []);

    return (
        <MacWindow name="github" title={'Github'} logo={'/doc-icons/github.svg'}>
            <div className="github-window">
                {loading && <p className="github-loading">Loading profile...</p>}
                {error && <p className="github-error">Error: {error}</p>}
                {data && (
                    <div className="github-content">
                        <div className="github-header">
                            <img src={data.avatarUrl} alt={data.name} className="github-avatar" />
                            <div className="github-info">
                                <h2>{data.name}</h2>
                                <p className="github-login">@{data.login}</p>
                                {data.bio && <p className="github-bio">{data.bio}</p>}
                            </div>
                        </div>

                        <div className="github-repos">
                            <h3>Recent Repositories</h3>
                            <div className="repos-list">
                                {data.repositories.nodes.map(repo => (
                                    <a 
                                        key={repo.name}
                                        href={repo.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="repo-card"
                                    >
                                        <div className="repo-header">
                                            <h4>{repo.name}</h4>
                                        </div>
                                        {repo.description && <p>{repo.description}</p>}
                                        {repo.primaryLanguage && (
                                            <span className="language">{repo.primaryLanguage.name}</span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="github-footer">
                            <a 
                                href={data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-profile-btn"
                            >
                                View Full Profile on GitHub →
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </MacWindow>
    )
}

export default Github
