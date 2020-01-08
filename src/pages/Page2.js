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
import Page3 from '../pages/Page3';



const ContainerBemvindas = (props) => {
    const {history} = props;  
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
            <input type="text" id="adicioneNome" placeholder="Por favor, digite seu nome"></input>
            <hr></hr>
            <p className="sobrenome"><strong>Sobrenome</strong></p>
            <input type="text" id="adicioneSobrenome" placeholder="Por favor, digite seu sobrenome"></input>
            <hr></hr>
            <p className="Email"><strong>Email</strong></p>
            <input type="text" id="adicioneEmail" placeholder="Por favor, digite seu email"></input>
            <hr></hr>
            <p className="senha"><strong>Senha</strong></p>
            <input type="password" id="adicioneSenha" placeholder="Por favor, digite sua senha"></input>
            <hr></hr>
            <p className="confirmar"><strong>Confirmar Senha</strong></p>
            <input type="password" id="confirmeSenha" placeholder="Por favor, confirme a sua senha"></input>
            <hr></hr>
            <button onClick={()=>history.push('/Page3')} className="btn-enviar">Enviar</button>
            </form>
        </div>
        </section>
        <ContainerImagens />
        <ContainerImagens2 />
        <Footer />
        </Fragment>
      );
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
