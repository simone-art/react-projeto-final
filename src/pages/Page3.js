import React, { Fragment, Children } from 'react';
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
            capturandoTitulo: "",
            nomes: [],
            texto: "",
            guardandoTexto: "",
            valueTextarea: "Escreva aquí seu texto"
            
            
        };
        this.handleClickInput=this.handleClickInput.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleChangeTextarea=this.handleChange.bind(this)
        // this.handleSubmit=this.handleSubmit.bind(this)
        this.adicionarItem=this.adicionarItem.bind(this)
  }
        // this.capturarTituloTexto=this.capturarTituloTexto.bind(this)
    

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
    
    // handleChange(event){
    //     this.setState({
    //         value: event.target.value,
    //     })
        
    // }

    // handleSubmit () { 
        
    //     let button = React.createElement("button", 
    //     {
    //         className:'btn-cadernos-fin', 
    //         // content: [this.state.value],
    //         // value: [this.state.value] 
            
    //     },
    //     this.state.capturandoTitulo
        
    //     // this.state.guardandoTexto
    //     )
    //     ReactDOM.render( button, document.getElementById('Tabela'));
    //     // alert(`você é um trouxa: ${this.state.value}`); 
        
    //     // console.log("clickou") 
    
    // }

    // onChangeInput = e => {
    //     //  let value = element.target.value
    //     this.setState({ value: e.target.value })
    //    //  console.log(e.target.value)
    // }


    adicionarItem = () => {
        this.setState({
            nomes: [ 
                ...this.state.nomes,
                this.state.capturandoTitulo,
            ]
        })
    }

    // adicionarTitulo = () => {
    //     this.setState({
    //         titulo: [ 
    //             ...this.state.titulo,
    //             this.state.capturandoTitulo,
    //         ]
    //     })
    // }

    handleChange = (event) => {
    const input = event.target;
    const value = input.value;
    this.setState({ [input.name]: value });
    }

     

    handleClickTextarea(){
        console.log("Ricky Martin")
    }


    handleChangeTextarea = (event) => {
        const textarea = event.target;
        const value = textarea.value;
     
        this.setState({ [textarea.name]: value });
    }

    handleTextareaSubmit = (event) => {
        const {capturandoTitulo, guardandoTexto} = this.state;
        localStorage.setItem(capturandoTitulo, guardandoTexto)
        
        
    }

    handleTextareaGet = () => {
        const {capturandoTitulo, guardandoTexto} = this.state;
        localStorage.getItem('capturandoTitulo')
        localStorage.getItem('guardandoTexto')
        // console.log("handleTextareaGet")
    }

    buttonClickMaterias = (event) => {
    const buttonTituloTexto = localStorage.getItem(event.target.textContent)
    const textoArea = document.getElementById("cadernoReprograma")
    textoArea.value = buttonTituloTexto; 
    console.log("VAI A MERDA")
        
    }

    
        render() {
            const {value} = this.state;
            const {button} = this.state;
            const {input} = this.state;
            const capturandoTitulo = document.getElementById("tituloInput");
            const guardandoTexto = document.getElementById("cadenaReprograma");
            const {valueTextarea} = this.state;
            
            
    
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

                                 <input name="capturandoTitulo" id="tituloInput" className="inputSpace" type="text" size="15" maxlength="30"
                                value={this.state.capturandoTitulo} onChange={this.handleChange} 
                                placeholder="Escreva o título do caderno"></input>
                                <button onClick={() => this.adicionarItem()} id="button-agregar" className="btn-agregar">Adicionar Caderno</button>
                            </div>

                            <Fragment>
                                
                            <div id="cadernos" draggable="true">
                                
                                
                                {this.state.nomes.map((value, i) => {
                                return (
                                    <div id="Tabela" key={i}>
                                        {/* {this.handleSubmit} */}
                                        {/* {this.handleTextareaGet()} */}
                                        <button className="btn-cadernos-fin" onClick={this.buttonClickMaterias}>{value}</button>
                                    </div>
                                    );
                                })}
                                   
                                </div>
                                </Fragment>

                            <div className="tarea">
                                <textarea name="guardandoTexto" id="cadernoReprograma" cols="30" rows="10"
                                placeholder="Escreva aquí seu texto" value={this.state.guardandoTexto} 
                                onChange={this.handleChangeTextarea} onInput={this.handleTextareaSubmit} ></textarea>
                            </div>

                            
                             

                            <div id="botaos">
                                <button onClick={this.handleTextareaGet()} id="salvar" className="btn-salvar">Salvar</button>
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
