import React from 'react';
import Container2 from '../componentes/Container2.js';
import ImagemDispositivo from '../img/dispositivos (1).png';
import ImagemPasta from '../img/carpeta.png';
import './Nav.css';


const ContainerNav2 = () => {
    return (
        <section className="container-row-2">
            <div className="tempo">
                <img className="foto-relogio" src={ImagemDispositivo} alt="foto de um relógio"></img>
                <h2>Estude onde quiser</h2>
                <p className="texto-tempo">Seja no celular, tablet ou desktop encontre todas as suas anotações e aproveite! </p> 
            </div>
            <div className="organizacao">
                <img className="foto-relogio" src={ImagemPasta} alt="foto de um relógio"></img>
                <h2>Descarregue tudo e  + </h2>
                <p className="texto-tempo">Ebooks e planilhas estarão a sua disposição para reforçar o seu estudo</p> 
            </div>
        </section>
        
    )
}

export default ContainerNav2;
