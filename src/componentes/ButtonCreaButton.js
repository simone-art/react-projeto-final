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
import ButtonCreaButton from "../componentes/ButtonCreaButton.js"

class ButtonButton extends React.Component{
    constructor(props){
        super (props)
        // this.state = {
        //     tituloInput: tituloInput,
        //     creaButton: <ButtonCreaButton />
        // }
       
    }

    // handleClickInput(){
    //     this.setState({
    //         tituloInput: this.tituloInput.value
    //     })
    // }

    // handleClickAdicionarCaderno(){
    //     this.setState({
    //         creaButton: <ButtonCreaButton />
    //     })
    // }
    
        tituloInputAdicionarCaderno(evento){
            const tituloInput = tituloInput.value;
            const errorInput = errorInput.value;
            evento.preventDefault();
            if (tituloInput.value === "") {
                errorInput.textContent = "Digite o titulo da sua matéria!"
        } else{
            const adicionarCaderno = React.createElement(
            "button",
            {id:"btn-cadernos-fin"},
            "adicionarCaderno",
            'div',
            {id:'Tabela'},
            'tituloInput')

            // const buttonTabela = tituloInput;
            // const tabela = "";
            // const error = "";
        }
    }    

    render() {
            return (
                
            React.createElement("button", {id:"Tabela", className:"btn-cadernos-fin"})
            
            )
        }
    
}

export default ButtonButton;

