import React from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks.js'
import './Nav.css';


const NavLinksSection = () => {
    return (
        <section className="navbar">
            <div className="Nav">
            <a className='home' href="Home">Home</a>
            <a className='sobre' href="#sobre">Sobre</a>
            <a className='sobre' href="Page2">Registre-se</a>
            <a className='caderno-digital' href="Page3">Caderno Digital</a>
            <a className='contato' href="#contato">Contato</a>
            <a className='contato' href="index.html">Pt</a>
            <a className='contato' href="indexEsp.html">Esp</a>
            </div>
            
        </section>
    )
}


export default NavLinksSection;




