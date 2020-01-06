import React from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks.js';
import ImagemHeader from '../componentes/ImagemHeader.js';
import Sobre from '../componentes/Sobre.js';
import './Nav.css';


const SobreNav = () => {
    return (
        <section id="sobre">
        <div className="features">
            <h2 className="titulo">Digital Notebook</h2>
            <p className="texto-1">Somos a Digital Notebook, uma plataforma online para você ter todas as suas anotações
        na palma da sua  mão. Diga adeus aos cadernos e peso na sua mochila. 
        Agora tudo o que você precisa estará no alcance de um clique!</p> 
        </div>
        </section>
        
    )
}

export default SobreNav;
