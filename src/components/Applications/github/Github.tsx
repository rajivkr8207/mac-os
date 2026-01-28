'use client'
import Image from "next/image"
import './github.scss'
import Link from "next/link"
import MacWindow from "../../MacWindow/MacWindow"
import { useEffect, useState } from "react"
import axios from "axios"

interface GithubProfile {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
}


const Github = ({ windowName }: { windowName: string }) => {
    const [data, setData] = useState<GithubProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        let mounted = true;

        async function fetchProfile() {
            try {
                const res = await axios.get<GithubProfile>(
                    'https://api.github.com/users/rajivkr8207'
                );
                if (mounted) setData(res.data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchProfile();

        return () => {
            mounted = false;
        };
    }, []);
    if (loading) {
        return (
            <MacWindow windowName={windowName}>
                <div className="profile-loading">Loading GitHub profile…</div>
            </MacWindow>
        );
    }

    if (error || !data) {
        return (
            <MacWindow windowName={windowName}>
                <div className="profile-error">Failed to load GitHub profile</div>
            </MacWindow>
        );
    }


    return (
        <MacWindow windowName={windowName}>
            <main className="profile">
                <section className="profile__header">
                    <Image
                        src={data.avatar_url}
                        alt={data.name}
                        width={100}
                        height={100}
                        className="profile__avatar"
                        unoptimized
                    />


                    <div className="profile__info">
                        <h1>{data.name}</h1>
                        <p className="username">@{data.login}</p>
                        <p className="bio">
                            {data.bio}
                        </p>

                        <div className="links">
                            <Link href={data.html_url} target="_blank">GitHub</Link>
                            <Link href="https://rj-portfolio.netlify.app" target="_blank">Portfolio</Link>
                        </div>
                    </div>
                </section>

                <section className="stats">
                    <div>
                        <span>{data.public_repos}</span>
                        <label>Repositories</label>
                    </div>
                    <div>
                        <span>{data.followers}</span>
                        <label>Followers</label>
                    </div>
                    <div>
                        <span>{data.following}</span>
                        <label>Following</label>
                    </div>
                </section>

                <section className="details">
                    <h2>About</h2>
                    <ul>
                        <li><strong>Role:</strong> Full-Stack Developer</li>
                        <li><strong>Primary Stack:</strong> Django, Python, JavaScript</li>
                        <li><strong>Experience:</strong> Backend APIs, Auth Systems, REST</li>
                        <li><strong>Focus:</strong> Clean architecture & long-term maintainability</li>
                    </ul>
                </section>

            </main>
        </MacWindow>
    )
}

export default Github