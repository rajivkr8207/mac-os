'use client'
import { useEffect, useState } from "react"
import MacWindow from "../../MacWindow/MacWindow"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './notes.scss'
interface windowProps {
    windowname: string
    setWindowsopen: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
}
const Note: React.FC<windowProps> = ({ windowname, setWindowsopen }) => {
    const [markdown, setMarkdown] = useState<string | null>(null)

    useEffect(() => {
        fetch('/note.txt')
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindow windowName={windowname} setWindowsOpens={setWindowsopen}>
            <div className="note-windows">
                {markdown ? <SyntaxHighlighter language="javascript" style={tomorrowNight}>
                    {markdown}
                </SyntaxHighlighter>

                    : 'loading ...'}
            </div>
        </MacWindow>
    )
}

export default Note