import React from 'react';
import Nav from '../componentes/Nav';
import logo from '../img/dispositivos (2).png';
import imagem from '../img/menu-hamburguer.png';
import './Nav.css';


const NavLogo = () => {
    return (
        <section className="navbar">
            <div className="logos">
                <img className='logo' src={logo} alt="logo del website"></img>
                <img className='hamburguer' src={imagem} alt="menu hamburguer"></img>
            </div>
        </section>
    )
}


export default NavLogo;




