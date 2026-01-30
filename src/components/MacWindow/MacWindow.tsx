/* eslint-disable react-hooks/purity */
'use client'
import type { ReactNode } from 'react';
import { Rnd } from 'react-rnd'
import './macwindow.scss'
import { useWindowManager } from '@/app/context/WindowManagerContext';


interface MacWindowProps {
    children: ReactNode;
    windowName: string;
}

const MacWindow = ({ children, windowName,  }: MacWindowProps) => {
    const {
        closeWindow,
        bringToFront,
        windowZ,
    } = useWindowManager();
    return (
        <Rnd
            default={{
                x: typeof window !== 'undefined' ? Math.floor(Math.random() * (window.innerWidth - 1000)) : 200,
                y: typeof window !== 'undefined' ? Math.floor(Math.random() * (window.innerHeight - 600)) : 200,

                width: 1000,
                height: 600,
            }}
            enableResizing={{
                bottom: true,
                right: true,
                bottomRight: true,
                top: false,
                left: false,
                topLeft: true,
                topRight: false,
                bottomLeft: true,
            }}
            minWidth={600}
            minHeight={400}
            bounds="window"
            dragHandleClassName="header"
            style={{ zIndex: windowZ[windowName] }}
            onMouseDown={() => bringToFront(windowName)}
            onDragStart={() => bringToFront(windowName)}
        >
            <div className='windows'>
                <div className='header'>
                    <div className='dots'>
                        <div className="dot red" onClick={() => closeWindow(windowName)} ></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">
                        <p>{windowName}</p>
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