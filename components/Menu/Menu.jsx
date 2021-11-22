
import "./Menu.scss"
import pagUno from '../../assets/pag-1.jpg'
import pagDos from '../../assets/pag-2.jpg'
import pagTres from '../../assets/pag-3.jpg'
import pagCuatro from '../../assets/pag-4.jpg'
import pagCinco from '../../assets/pag-5.jpg'
import pagSeis from '../../assets/pag-6.jpg'


function Menu(){
    return(
        <div id="fondoMenu" className="d-flex justify-content-center align-items-center">
            <p id="menu">Nuestra Carta</p>
            <div id="menu-container" className="container-fluid d-flex flex-column flex-nowrap align-items-center">
                <div id="volverArriba"></div>
                <p id="scroll" ><strong>🡣 🡣 🡣</strong></p>
                <img src={pagUno} alt="Menu" className="imagenPrincipal-menu"/>
                <img src={pagDos} alt="Menu" className="imagenPrincipal-menu"/>
                <img src={pagTres} alt="Menu" className="imagenPrincipal-menu"/>
                <img src={pagCuatro} alt="Menu" className="imagenPrincipal-menu"/>
                <img src={pagCinco} alt="Menu" className="imagenPrincipal-menu"/>
                <img src={pagSeis} alt="Menu" className="imagenPrincipal-menu"/>
                <a href="#volverArriba" id="menu-arriba"><p>Volver Arriba</p></a>
            </div>   
        </div>
    )
}

export default Menu;