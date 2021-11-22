import React from 'react'
import logoDF from '../../assets/logo-df.png'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <h2 className="navbar-brand title-navbar ">Distrito federal</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto navbar-elements">
              <a href="#menu" className="menu-buttons text-decoration-none" >
                <p className="nav-link text-white">Menú</p>
              </a>

              <a href="#reservas" className="menu-buttons text-decoration-none" >
                <p className="nav-link text-white">Reservas</p>
              </a>

              <div className="li-img me-5 ms-5" >
                <img src={logoDF} alt="" className="logo-df" />
              </div>

              <a href="#promos" className="menu-buttons text-decoration-none" >
                <p className="nav-link text-white ">Promos</p>
              </a>

              <a href="#contactos" className="menu-buttons  text-decoration-none" >
                <p className="nav-link text-white ">Contactos</p>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
