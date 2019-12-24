import React from 'react';
import ContainerImagens from '../componentes/ContainerImagens.js';
import imagemFace from '../img/face.jpg';
import imagemEstudo from '../img/javascript.jpg';
import imagemCode from '../img/webdesigner.jpg';
import imagemStudy from '../img/study2;jpg.jpg';
import './Nav.css';


const ContainerImg = () => {
    return (
        <section className="container-imagens">
            <img className="programacion" src={imagemFace} alt="personas programando"></img>
            <img className="estudo" src={imagemEstudo} alt="persona letrero code"></img>
            <img className="code" src={imagemCode} alt="persona letrero code"></img>
            <img className="face" src={imagemStudy} alt="rostro de mulher feliz"></img>
        </section>
        
    )
}

export default ContainerImg;
