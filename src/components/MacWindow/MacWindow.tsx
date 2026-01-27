'use client'
import { ReactNode } from 'react';
import { Rnd } from 'react-rnd'
import './macwindow.scss'

interface MacWindowProps {
    children: ReactNode;
    windowName: string;
    setWindowsOpens: React.Dispatch<React.SetStateAction<boolean>>
}

const MacWindow = ({ children, windowName, setWindowsOpens }: MacWindowProps) => {
    return (
        <Rnd
            default={{
                x: 200,
                y: 200,
                width: 1000,
                height: 600,
            }}
        >
            <div className='windows'>
                <div className='header'>
                    <div className='dots'>
                        <div className="dot red" onClick={() => setWindowsOpens((state) => ({...state, [windowName]: false}))} ></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">
                        <p>rajivkumar@candy:~</p>
                    </div>
                </div>
                <div className='main-content'>
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow    