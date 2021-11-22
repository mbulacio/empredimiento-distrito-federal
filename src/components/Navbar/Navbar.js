import React from 'react'
import logoDF from '../../assets/logo-df.png'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'

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
              <NavLink to='/' className="menu-buttons text-decoration-none" >
                <p className="nav-link text-white">Menú</p>
              </NavLink>

              <NavLink to='/' className="menu-buttons text-decoration-none" >
                <p className="nav-link text-white">Reservas</p>
              </NavLink>

              <NavLink to='/' className="li-img me-5 ms-5" >
                <img src={logoDF} alt="" className="logo-df" />
              </NavLink>

              <NavLink to='/' className="menu-buttons text-decoration-none" >
                <p className="nav-link text-white ">Promos</p>
              </NavLink>

              <NavLink to='/' className="menu-buttons  text-decoration-none" >
                <p className="nav-link text-white ">Contactos</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
