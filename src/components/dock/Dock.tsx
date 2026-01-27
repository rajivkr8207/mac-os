

import Image from 'next/image';
import './dock.scss';

type DockProps = {
    setWindow: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};

const Dock: React.FC<DockProps> = ({ setWindow }) => {
    return (
        <footer className='dock'>
            <div
                className='icon github'
                onClick={() =>
                    setWindow((state) => ({
                        ...state,
                        github: true,
                    }))
                }
            >
                <Image src='/doc_icon/github.svg' width={40} height={40} alt='' />
            </div>
            <div className='icon note'>
                <Image src='/doc_icon/note.svg' width={40} height={40} alt='' />
            </div>
            <div className='icon pdf'>
                <Image src='/doc_icon/pdf.svg' width={40} height={40} alt='' />
            </div>
            <div className='icon calender'>
                <Image src='/doc_icon/calender.svg' width={40} height={40} alt='' />
            </div>
            <div className='icon spotify'>
                <Image src='/doc_icon/spotify.svg' width={40} height={40} alt='' />
            </div>
            <div className='icon link'>
                <Image src='/doc_icon/link.svg' width={40} height={40} alt='' />
            </div>
            <div className='icon mail'>
                <Image src='/doc_icon/mail.svg' width={40} height={40} alt='' />
            </div>
            <div className='icon cli'>
                <Image src='/doc_icon/cli.svg' width={40} height={40} alt='' />
            </div>
        </footer>
    )
}

export default Dock