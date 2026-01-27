import Image from 'next/image'
import './Navbar.scss'
import DateTime from '../Datetime/DateTime'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="left">
                    <div className='apple-icon'>
                        <Image src='/nav_icon/apple.svg' width={20} height={20} alt='' />
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
                <div className='wifi-icon'>
                        <Image src='/nav_icon/wifi.svg' width={20} height={20} alt='' />
                    </div>
                    <DateTime />
                </div>
            </nav>
        </>
    )
}

export default Navbar