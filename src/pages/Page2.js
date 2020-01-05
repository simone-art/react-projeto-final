import React, {Fragment} from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks';
import ImagemHeader from '../componentes/ImagemHeader.js';
import Page2 from '../pages/Page2';
import ImagemFace from '../img/face.jpg';
import ImagemComputer from '../img/computer.jpg'
import ContainerImagens from '../componentes/ContainerImagens.js';
import ContainerImagens2 from '../componentes/ContainerImagens2.js';
import Footer from '../componentes/Footer.js';
import '../pages/Page2.css';

class ContainerBemvindas extends React.Component {
    render() {
      return (
          <Fragment>
              <Nav />
              <NavLinks />
              <ImagemHeader />
          
        <div className="container">
            <img className="img-aluna" src={ImagemFace} alt="foto-perfil-da aluna"></img>
            <div className="texto-button">
                <p className="texto-aluna">Oi, alunas. Sejam muito 
                Bem-vindas a nova plataforma de estudo da Reprograma</p>
            </div>
        </div>

        <section id="formulario-registrese"className="container-registrese">
            <img  className="computador"src={ImagemComputer} alt="foto-computador"></img>
            <div className="registrese">
                <form id="form">
                <h1>Registre-se</h1>
                <p className="texto-registrese">Registrar-se é muito rápido. Abra uma conta 
            e desfrute desta ferramenta de estudo exclusivo para a Reprograma</p>
            <p className="nome"><strong>Nome</strong></p>
            <input type="text" id="adicioneNome" placeholder=""></input>
            <hr></hr>
            <p class="sobrenome"><strong>Sobrenome</strong></p>
            <input type="text" id="adicioneSobrenome" placeholder=""></input>
            <hr></hr>
            <p class="Email"><strong>Email</strong></p>
            <input type="text" id="adicioneEmail" placeholder=""></input>
            <hr></hr>
            <p class="senha"><strong>Senha</strong></p>
            <input type="password" id="adicioneSenha" placeholder=""></input>
            <hr></hr>
            <p class="confirmar"><strong>Confirmar Senha</strong></p>
            <input type="password" id="confirmeSenha" placeholder=""></input>
            <hr></hr>
            <button class="btn-enviar">Enviar</button>
            </form>
        </div>
        </section>
        <ContainerImagens />
        <ContainerImagens2 />
        <Footer />
        </Fragment>
      );
    }
  }


// const ContainerBemvindas = () => {
//     return (
//         <div className="container">
//             <img className="img-aluna" src={imagenFace} alt="foto-perfil-da aluna"></img>
//             <div className="texto-button">
//                 <p className="texto-aluna">Oi, alunas. Sejam muito 
//                 Bem-vindas a nova plataforma de estudo da Reprograma</p>
//             </div>
//         </div>
    
//     )
// }

export default ContainerBemvindas;
