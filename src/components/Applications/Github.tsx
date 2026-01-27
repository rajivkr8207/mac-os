'use client'
import Image from "next/image"
import './github.scss'
import Link from "next/link"
import MacWindow from "../MacWindow/MacWindow"

interface GithubProps {
    windowname: string
    setWindowsopen: React.Dispatch<React.SetStateAction<boolean>>
}

const Github: React.FC<GithubProps> = ({ windowname, setWindowsopen }) => {
    return (
        <MacWindow windowName={windowname} setWindowsOpens={setWindowsopen}>
            <main className="profile">
                <section className="profile__header">
                    <img
                        src="https://avatars.githubusercontent.com/u/160749166?v=4"
                        alt="Rajiv Kumar"
                        className="profile__avatar"
                        width={100}
                        height={200}
                    />

                    <div className="profile__info">
                        <h1>Rajiv Kumar</h1>
                        <p className="username">@rajivkr8207</p>
                        <p className="bio">
                            Full-stack web developer skilled in Django and Python.
                            Passionate about building scalable, reliable applications.
                        </p>

                        <div className="links">
                            <Link href="https://github.com/rajivkr8207" target="_blank">GitHub</Link>
                            <Link href="https://rj-portfolio.netlify.app" target="_blank">Portfolio</Link>
                        </div>
                    </div>
                </section>

                <section className="stats">
                    <div>
                        <span>42</span>
                        <label>Repositories</label>
                    </div>
                    <div>
                        <span>3</span>
                        <label>Followers</label>
                    </div>
                    <div>
                        <span>3</span>
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

                <footer className="footer">
                    <p>© 2026 Rajiv Kumar · Built with HTML & SCSS</p>
                </footer>
            </main>
        </MacWindow>

    )
}

export default Github