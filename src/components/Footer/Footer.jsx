import "./Footer.scss"

import logoGEO from '../../assets/geo.png'
import logoWH from '../../assets/WhatsApp.png'
import logoIN from '../../assets/Instagram.png'

function Footer(){
    return(
        <footer className="container-fluid ">
            <div className="row margin">
                <p className="col-2">Contactos</p>
                <a href="https://goo.gl/maps/jY22FCn4MVi7hVuC6" className="col-1" target="_blank">
                    <img src={logoGEO} alt="WhatsApp" className="footer-logo"/>
                </a>
                <a href="https://wa.me/+573118651831" target="_blank" className="col-1">
                        <img src={logoWH} alt="WhatsApp" className="footer-logo"/>
                </a>
                <a href="https://www.instagram.com/distritofederalbog/" target="_blank" className="col-1">
                        <img src={logoIN} alt="Instagram" className="footer-logo"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;