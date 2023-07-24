import React from 'react'
import { FaInstagram, } from "react-icons/fa";
import { AiFillLinkedin} from "react-icons/ai";
import logo from '../../Imagenes/Sin título-1LOGO.png'
import style from './navbar.module.css';


const Navbar = () => {
  return (
    <div className={style.contenedor}>
        <div className={style.contenedorlogo}>
            <img src={logo} alt="logo" className={style.logo} />
        </div>
        <div >
            <ul className={style.lista}>
                <li>Inicio</li>
                <li>Sobre mi</li>
                <li>Modalidades</li>
                <li>Preguntas</li>
                <li>Contacto</li>
            </ul>
        </div>
        <div className={style.redes}>
            <a href="https://www.linkedin.com/in/sabrina-morocho-90bb5b235/" target='blank'><AiFillLinkedin/></a>
            <a href="https://www.instagram.com/psicosabrii/" target='blank'><FaInstagram/></a>
        </div>
    </div>
  )
}

export default Navbar