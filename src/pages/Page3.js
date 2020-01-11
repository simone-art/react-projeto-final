import React, { Fragment } from 'react';
import Nav from '../componentes/Nav';
import NavLinks from '../componentes/NavLinks';
import ImagemHeader from '../componentes/ImagemHeader.js';
import Page3 from '../pages/Page3';
import ImagemPasta from '../img/icone-pasta.png';
import ContainerImagens from '../componentes/ContainerImagens.js';
import ContainerImagens2 from '../componentes/ContainerImagens2.js';
import Footer from '../componentes/Footer.js';
import ToggleDisplay from 'react-toggle-display';
import '../pages/Page3.css';


class CadernoDigital extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false, 
            hide: true
        
        };
        }

        handleClick() {
            this.setState({
              show: !this.state.show
            });
        }

        handleClickCaderno () {
            this.setState({
                hide: !this.state.hide
            });
        }
        

    render() {
        return (
            <Fragment>
                <Nav />
                <NavLinks />
                <ImagemHeader />
                <section className="secao-caderno-digital">
                    <div>
                        <button onClick={ () => this.handleClick() } id="ferramentas-geral" className="ferramentas">Ferramentas
                    <div className="button_horizontal"></div>
                        </button>
                    </div>
                    <div id="div1">
                        <ToggleDisplay show={this.state.show}>
                        <button onClick ={() => this.handleClickCaderno()} id="button-cadernos" className="btn-cadernos">
                            <img src={ImagemPasta} alt="icone-de-pasta"></img>
                            <p>Cadernos</p>
                        </button>
                        </ToggleDisplay>
                    </div>
 
                    <section id="caderno-img">
                    <ToggleDisplay hide={this.state.hide}>
                        <div className="caderno-funcional">
                            <h2>Título</h2>
                            <input id="tituloInput" class="inputSpace" type="text" size="15" maxlength="30"
                                value="Escreva o título do caderno"></input>
                            <p className="error"></p>
                            <button id="button-agregar" className="btn-agregar">Adicionar Caderno</button>
                        </div>

                        <div id="cadernos" draggable="true">

                            <div id="Tabela"></div>


                        </div>
                        <div className="tarea">
                            <textarea name="Reprograma" id="cadernoReprograma" cols="30" rows="10"
                                value="Escreva aquí o seu texto">Escreva aqui o texto</textarea>
                        </div>
                        <div id="botaos">
                            <button id="salvar" className="btn-salvar">Salvar</button>
                            <button id="novo" className="btn-novo">Criar PDF</button>
                        </div>
                        </ToggleDisplay>
                    </section> 
                </section>
                <ContainerImagens />
                <ContainerImagens2 />
                <Footer />
            </Fragment>
        );
    }
}


export default CadernoDigital;
