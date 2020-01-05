import React from 'react';
import Page2 from '../paginas/Page2'
import imagenFace from '../img/face.jpg'
import '../paginas/Page2.css'


const ContainerBemvindas = () => {
    return (
        <div className="container">
            <img className="img-aluna" src={imagenFace} alt="foto-perfil-da aluna"></img>
            <div className="texto-button">
                <p className="texto-aluna">Oi, alunas. Sejam muito 
                Bem-vindas a nova plataforma de estudo da Reprograma</p>
            </div>
        </div>
    
    )
}

export default ContainerBemvindas;