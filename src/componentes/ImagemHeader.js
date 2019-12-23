import React from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks.js';
import ImagemHeader from '../componentes/ImagemHeader.js';
import imagemFin from '../img/foto-education.jpg'
import './Nav.css';


const ImagemCabelcalho = () => {
    return (
            <div className="header">
            <img className='img-header' src={imagemFin} alt="foto portada del website"></img>
            </div>
        
    )
}

export default ImagemCabelcalho;




