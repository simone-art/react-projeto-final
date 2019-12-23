import React from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks.js'
import './Nav.css';


const NavLinksSection = () => {
    return (
        <section className="navbar">
            <div className="Nav">
            <a className='home' href="index.html">Home</a>
            <a className='sobre' href="#sobre">Sobre</a>
            <a className='sobre' href="page2.html">Registre-se</a>
            <a className='caderno-digital' href="page3.html">Caderno Digital</a>
            <a className='contato' href="#footerFin">Contato</a>
            <a className='contato' href="index.html">Pt</a>
            <a className='contato' href="indexEsp.html">Esp</a>
            </div>
            
        </section>
    )
}


export default NavLinksSection;




