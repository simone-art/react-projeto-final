import React, {Fragment} from 'react';
import Nav from './componentes/Nav';
import NavLinks from './componentes/NavLinks';
import ImagemHeader from './componentes/ImagemHeader.js';
import Sobre from './componentes/Sobre.js';
import Container from './componentes/Container.js';
import Container2 from './componentes/Container2.js';
import ContainerImagens from './componentes/ContainerImagens.js';
import ContainerImagens2 from './componentes/ContainerImagens2.js';
import Footer from './componentes/Footer.js';
import Home from './pages/Home';
import Page2 from './pages/Page2.js';
import Page3 from './pages/Page3.js';
import {BrowserRouter, Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Nav />
      <NavLinks />
      <ImagemHeader />
      <Sobre />
      <Container />
      <Container2 />
      <ContainerImagens />
      <ContainerImagens2 />
      <Footer />
     */}
      
      <BrowserRouter>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Page2" component={Page2} />
        <Route path="/Page3" component={Page3} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App;
