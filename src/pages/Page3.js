import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
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
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            hide: true,
            value: "",
            
        };
        this.handleClickInput=this.handleClickInput.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleClick() {
        this.setState({
            show: !this.state.show
        });
    }

    handleClickCaderno() {
        this.setState({
            hide: !this.state.hide
        });
    }
    
    handleClickInput() {
        // this.handleSubmit()
        console.log("alguma coisa");
        
    }
    
    handleChange(event){
        this.setState({
            value: event.target.value
        })
        
    }

    handleSubmit () { 
        let button = React.createElement("button", 
        {
            className:'btn-cadernos-fin', 
            // content: [this.state.value],
            // value: [this.state.value]
           
        },
        this.state.value
        )
        ReactDOM.render( button, document.getElementById('Tabela'));
        // alert(`você é um trouxa: ${this.state.value}`); 
        
        // console.log("clickou")
        
        
    }
    
    
    // handleClickButton() {
    //     this.setState({
    //         pepino: !this.state.show
    //     });
    // }
    
    
    
    
    render() {
        const {value} = this.state;
        const {button} = this.state;

        // const {buttonCaderno} = this.state;
        return (
            <Fragment>
                <Nav />
                <NavLinks />
                <ImagemHeader />
                <section className="secao-caderno-digital">
                    <div>
                        <button onClick={() => this.handleClick()} id="ferramentas-geral" className="ferramentas">Ferramentas
                    <div className="button_horizontal"></div>
                        </button>
                    </div>
                    <div id="div1">
                        <ToggleDisplay show={this.state.show}>
                            <button onClick={() => this.handleClickCaderno()} id="button-cadernos" className="btn-cadernos">
                                <img src={ImagemPasta} alt="icone-de-pasta"></img>
                                <p>Cadernos</p>
                            </button>
                        </ToggleDisplay>
                    </div>

                    <section id="caderno-img">
                        <ToggleDisplay hide={this.state.hide}>
                            <div className="caderno-funcional">
                                <h2>Título</h2>
                                <p className="error"></p>
                                <input id="tituloInput" className="inputSpace" type="text" size="15" maxlength="30"
                                value={value} onChange={this.handleChange} onInput={this.handleClickInput}
                                placeholder="Escreva o título do caderno"></input>
                                <button onClick={() => this.handleSubmit()} id="button-agregar" className="btn-agregar">Adicionar Caderno</button>

                            </div>
                            <div id="cadernos" draggable="true">
                                
                                <div id="Tabela">
                                    
                                
                                {/* [`${this.state.value}`]: value */}
                                {/* {this.state.value} */}
                                    {/* {this.state.value} */}
                                 
                                 
                                
                                {/* <CrearButton value={value} button={button} /> */}
                                </div>
                                
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
