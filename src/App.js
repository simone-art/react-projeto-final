import React from 'react';
import Route from 'react-router-dom';
import Nav from './componentes/Nav';
import NavLinks from './componentes/NavLinks';
import ImagemHeader from './componentes/ImagemHeader.js';


function App() {
  return (
    <div className="App">
      <Nav />
      <NavLinks />
      <ImagemHeader />
     
    </div>
  );
}

export default App;
