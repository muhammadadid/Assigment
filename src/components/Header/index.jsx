import './style.css'
import LogoImage from '../../assets/logo_1.png'
import Navlist from './Navlist'
import Navlogo from './Navlogo'

const Header = () => {
    const LinkList = ["Beranda", "Menu", "Location", "Contac", "About", "Order"]
    return (
        <div>
            <div className='navbar-wrapper'>
                <div className='navbar-container'>\
                <Navlogo logo={LogoImage}/>
                <Navlist data={LinkList}/>
                </div>
            </div>
        </div>
    )
}

export default Header;