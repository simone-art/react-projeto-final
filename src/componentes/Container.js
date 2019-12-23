import React from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks.js';
import ImagemHeader from '../componentes/ImagemHeader.js';
import Sobre from '../componentes/Sobre.js';
import imagemSobre from '../img/reloj.png';
import imagemLibro from '../img/libro.png'
import Container from '../componentes/Container.js';
import './Nav.css';


const ContainerNav = () => {
    return (
        <section className="container-row">
            <div className="tempo">
                <img className="foto-relogio" src={imagemSobre} alt="foto de um relógio"></img>
                <h2>Controle o seu tempo</h2>
                <p className="texto-tempo">Busque as informações que você precisa sem perder seu tempo</p> 
            </div>
            <div className="organizacao">
                <img className="foto-relogio" src={imagemLibro} alt="foto de um relógio"></img>
                <h2>Tudo Organizado</h2>
                <p className="texto-tempo">Salve o material em pastas personalizadas</p> 
            </div>
        </section>
        
    )
}

export default ContainerNav;
