import React, {Fragment} from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks';
import ImagemHeader from '../componentes/ImagemHeader.js';
import Page2 from '../pages/Page2';
import imagenFace from '../img/face.jpg';
import '../pages/Page2.css';

class ContainerBemvindas extends React.Component {
    render() {
      return (
          <Fragment>
              <Nav />
              <NavLinks />
              <ImagemHeader />
          
        <div className="container">
            <img className="img-aluna" src={imagenFace} alt="foto-perfil-da aluna"></img>
            <div className="texto-button">
                <p className="texto-aluna">Oi, alunas. Sejam muito 
                Bem-vindas a nova plataforma de estudo da Reprograma</p>
            </div>
        </div>
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
