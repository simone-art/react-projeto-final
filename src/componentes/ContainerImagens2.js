import React from 'react';
import ContainerImagens2 from '../componentes/ContainerImagens2.js';
import imagemProgramacao from '../img/programacion.jpg';
import imagemPrograma from '../img/programando.jpg';
import imagemDispositivo from '../img/dispositivos3.jpg';
import imagemMulher from '../img/code.jpg';
import './Nav.css';


const ContainerImg2 = () => {
    return (
        <section className="container-imagens-2">
            <img className="code" src={imagemProgramacao} alt="persona letrero code"></img>
            <img className="programacion" src={imagemPrograma} alt="personas programando"></img>
            <img className="estudo" src={imagemDispositivo} alt="persona letrero code"></img>
            <img className="face" src={imagemMulher} alt="rostro de mulher feliz"></img>
    </section>
        
    )
}

export default ContainerImg2;
