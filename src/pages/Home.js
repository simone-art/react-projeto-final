import React, {Fragment} from 'react';
import Nav from '../componentes/Nav.js';
import NavLinks from '../componentes/NavLinks.js';
import ImagemHeader from '../componentes/ImagemHeader.js';
import Sobre from '../componentes/Sobre.js';
import Container from '../componentes/Container.js';
import Container2 from '../componentes/Container2.js';
import ContainerImagens from '../componentes/ContainerImagens.js';
import ContainerImagens2 from '../componentes/ContainerImagens2.js';
import Footer from '../componentes/Footer.js';
import '../componentes/Nav.css';

class HomeDigital extends React.Component {
    render() {
      return (
          <Fragment>
              <Nav />
              <NavLinks />
              <ImagemHeader />
              <Sobre />
                <Container />
                <Container2 />
                <ContainerImagens />
                <ContainerImagens2 />
                <Footer />
            </Fragment>
      );
    }
  }




export default HomeDigital;