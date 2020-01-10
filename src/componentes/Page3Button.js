import React, { Fragment } from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks';
import ImagemHeader from '../componentes/ImagemHeader.js';
import Page3 from '../pages/Page3';
import ImagemPasta from '../img/icone-pasta.png';
import ContainerImagens from '../componentes/ContainerImagens.js';
import ContainerImagens2 from '../componentes/ContainerImagens2.js';
import Footer from '../componentes/Footer.js';
import '../pages/Page3.css';
import Page3Button from '../componentes/Page3Button'

const ButtonFerramentas = () => {
    return (
        <div>
            <button id="ferramentas-geral" className="ferramentas">Ferramentas
                <div className="button_horizontal"></div>
            </button>
        </div>
        
    )
}

export default ButtonFerramentas;