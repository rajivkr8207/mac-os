import Image from 'next/image'
import './Navbar.scss'
import DateTime from '../Datetime/DateTime'
import { useSpotlight } from '@/app/context/SpotlightContext';
import { FiSearch } from 'react-icons/fi';
const Navbar = () => {
    const { open } = useSpotlight();
    return (
        <>
            <nav>
                <div className="left">
                    <div className='apple-icon'>
                        <Image src='/nav_icon/applebk.png' width={20} height={20} alt='' />
                    </div>
                    <div className='nav-item'>
                        <p>rajiv kumar</p>
                    </div>
                    <div className='nav-item'>
                        <p>file</p>
                    </div>
                    <div className='nav-item'>
                        <p>terminal</p>
                    </div>
                </div>
                <div className="right">
                    <button onClick={open} className="Spotlight_Search">
                        <FiSearch />
                    </button>
                    <div className='wifi-icon'>
                        <Image src='/nav_icon/wifibk.png' width={20} height={20} alt='' />
                    </div>
                    <DateTime />
                </div>
            </nav>
        </>
    )
}

export default Navbar