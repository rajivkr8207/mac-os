'use client'
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Rnd } from 'react-rnd'
import './macwindow.scss'

type WindowState = Record<string, boolean>;

interface MacWindowProps {
    children: ReactNode;
    windowName: string;
    setWindowsOpens:  Dispatch<SetStateAction<Record<string, boolean>>>
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