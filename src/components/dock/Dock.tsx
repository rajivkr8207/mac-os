'use client'
import Image from 'next/image';
import './dock.scss';
import { useWindowManager } from '@/app/context/WindowManagerContext';

const Dock = ({ }) => {
    const { openWindow, windowsOpen } = useWindowManager();
    return (
        <>
        <footer className='dock'>
        <div className='icon help' onClick={() => openWindow("help")}>
                <Image src='/doc_icon/help.png' width={50} height={50} alt='' />
                {windowsOpen?.help &&  <div className='active-dot'></div>}
            </div>
            <div
                className='icon github'
                onClick={() => openWindow("github")}
            >
                <Image src='/doc_icon/github.svg' width={40} height={40} alt='' />
                {windowsOpen.github && 
                <div className='active-dot'>

                </div>}
            </div>
            <div className='icon note' onClick={() => openWindow("note")}>
                <Image src='/doc_icon/note.svg' width={40} height={40} alt='' />
                {windowsOpen.note &&  <div className='active-dot'></div>}
            </div>
            <div className='icon pdf' onClick={() => openWindow("pdf")}>
                <Image src='/doc_icon/pdf.svg' width={40} height={40} alt='' />
                {windowsOpen?.pdf &&  <div className='active-dot'></div>}
            </div>
            <div className='icon calender' onClick={() => openWindow("calender")}>
                <Image src='/doc_icon/calender.svg' width={40} height={40} alt='' />
                {windowsOpen?.calender &&  <div className='active-dot'></div>}

            </div>
            <div className='icon settings' onClick={() => openWindow("settings")}>
                <Image src='/doc_icon/settings.png' width={60} height={60} alt='' />
                {windowsOpen?.settings &&  <div className='active-dot'></div>}

            </div>
            
            <div className='icon mail' onClick={()=>{window.open('mailto:rajiv.kr0829@gmail.com', "_blank")}}>
                <Image src='/doc_icon/mail.svg' width={40} height={40} alt='' />
                {/* <div className='active-dot'></div> */}
            </div>
            <div className='icon cli' onClick={() => openWindow("terminal")}>
                <Image src='/doc_icon/cli.svg' width={40} height={40} alt='' />
                {windowsOpen?.terminal &&  <div className='active-dot'></div>}
            </div>
        </footer>
        </>
    )
}

export default Dock