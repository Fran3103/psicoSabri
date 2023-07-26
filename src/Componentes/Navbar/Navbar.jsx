import React from 'react'
import { FaInstagram, } from "react-icons/fa";
import { AiFillLinkedin} from "react-icons/ai";
import logo from '../../Imagenes/Sin título-1LOGO.png'
import  './navbar.css';

const Navbar = () => {
  return (
    <div className="container-fluid  ">
        <div className="row flex align-items-center   ">
            <div className="col-md-4 ">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className=' col-md'>
                <ul className=" Lista ">
                    <li>Inicio</li>
                    <li>Sobre mi</li>
                    <li>Modalidades</li>
                    <li>Preguntas</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="col-md-2 redes" >
                <a href="https://www.linkedin.com/in/sabrina-morocho-90bb5b235/" target='blank'><AiFillLinkedin/></a>
                <a href="https://www.instagram.com/psicosabrii/" target='blank'><FaInstagram/></a>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar