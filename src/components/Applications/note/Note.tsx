'use client'
import { useEffect, useState } from "react"
import MacWindow from "../../MacWindow/MacWindow"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './notes.scss'

const Note = ( { windowName }: { windowName: string }) => {
    const [markdown, setMarkdown] = useState<string | null>(null)

    useEffect(() => {
        fetch('/note.txt')
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindow windowName={windowName}>
            <div className="note-windows">
                {markdown ? <SyntaxHighlighter language="javascript" style={atelierForestDark}>
                    {markdown}
                </SyntaxHighlighter>

                    : 'loading ...'}
            </div>
        </MacWindow>
    )
}

export default Note