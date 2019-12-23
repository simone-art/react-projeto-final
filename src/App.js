import React from 'react';
import Route from 'react-router-dom';
import Nav from './componentes/Nav';
import NavLinks from './componentes/NavLinks';
import ImagemHeader from './componentes/ImagemHeader.js';
import Sobre from './componentes/Sobre.js';
import Container from './componentes/Container.js';
import Container2 from './componentes/Container2.js';


function App() {
  return (
    <div className="App">
      <Nav />
      <NavLinks />
      <ImagemHeader />
      <Sobre />
      <Container />
      <Container2 />
     
    </div>
  );
}

export default App;
