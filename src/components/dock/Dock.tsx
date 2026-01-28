'use client'

import Image from 'next/image';
import './dock.scss';
import type { Dispatch, SetStateAction } from 'react';

type WindowState = Record<string, boolean>;

type DockProps = {
    windowstate?: WindowState;
    setWindow: Dispatch<SetStateAction<WindowState>>;
};

const Dock: React.FC<DockProps> = ({ windowstate, setWindow }) => {
    const safeWindowState: WindowState = windowstate ?? {};
    return (
        <>
        <footer className='dock'>
            <div
                className='icon github'
                onClick={() =>
                    setWindow((state) => ({
                        ...state,
                        github: !state.github,
                    }))
                }
            >
                <Image src='/doc_icon/github.svg' width={40} height={40} alt='' />
                {!!safeWindowState.github && 
                <div className='active-dot'>

                </div>}
            </div>
            <div className='icon note' onClick={() =>
                    setWindow((state) => ({
                        ...state,
                        note: !state.note,
                    }))
                }>
                <Image src='/doc_icon/note.svg' width={40} height={40} alt='' />
                {!!safeWindowState.note &&  <div className='active-dot'></div>}
            </div>
            <div className='icon pdf' onClick={() =>
                    setWindow((state) => ({
                        ...state,
                        pdf: !state.pdf,
                    }))
                }>
                <Image src='/doc_icon/pdf.svg' width={40} height={40} alt='' />
                {windowstate?.pdf &&  <div className='active-dot'></div>}
            </div>
            <div className='icon calender' onClick={() =>
                    setWindow((state) => ({
                        ...state,
                        calender: !state.calender,
                    }))
                }>
                <Image src='/doc_icon/calender.svg' width={40} height={40} alt='' />
                {/* <div className='active-dot'></div> */}
            </div>
            <div className='icon settings'>
                <Image src='/doc_icon/settings.png' width={60} height={60} alt='' />
                <div className='active-dot'></div>
            </div>
            <div className='icon link'>
                <Image src='/doc_icon/link.svg' width={40} height={40} alt='' />
                <div className='active-dot'></div>
            </div>
            <div className='icon mail'>
                <Image src='/doc_icon/mail.svg' width={40} height={40} alt='' />
                <div className='active-dot'></div>
            </div>
            <div className='icon cli' onClick={() =>
                    setWindow((state) => ({
                        ...state,
                        cli: !state.cli,
                    }))
                }>
                <Image src='/doc_icon/cli.svg' width={40} height={40} alt='' />
                {windowstate?.cli &&  <div className='active-dot'></div>}
            </div>
        </footer>
        </>
    )
}

export default Dock