import React from 'react';
import Footer from '../componentes/Footer.js';
import imagemFacebook from '../img/facebook-blanco.png';
import imagemInstagram from '../img/instagram-blanco3.png';
import imagemEmail from '../img/email.png';
import {Link} from 'react-router-dom';
import './Nav.css';



const FooterHome = () => {
    return (
        <section id="contato">
        <div className="footer">
            <img className="icone" src= {imagemFacebook} alt="icone do facebook"></img>
            {/* <Link to="https://www.facebook.com/Digital-Notebook-106583407505795/?modal=admin_todo_tour"></Link> */}
            <a href="https://www.facebook.com/Digital-Notebook-106583407505795/?modal=admin_todo_tour"> </a>
            <img className="icone" src={imagemInstagram} alt="icone do instagram"></img>
            <a href="https://www.instagram.com/digitalnotebook1/"> </a>
            <img className="icone" src={imagemEmail} alt="icone de email"></img>
        </div>
        </section>
        
    )
}

export default FooterHome;
