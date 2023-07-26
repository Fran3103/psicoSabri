import React from 'react'
import style from './header.module.css'
import imagen from '../../src/Imagenes/foto.png'


const Header = () => {
  return (
    <div className={style.contenedor}>
        <div className={style.imgprincipal}>
            <img src={imagen} alt="imagen principal" />
        </div>
        <div className={style.sobremi}>
            <h1>
                Acerca de mí
            </h1>
            <h3>

                Sabrina Morocho - Licenciada en Psicología
            
            </h3>
            <h3>
                Graduada en la Universidad de Ciencias Empresariales y Sociales  (UCES)
                
            </h3>
            <p>
                Ha realizado estudios de postgrado en Clínica con Adolescentes
                en la Institución Fernando Ulloa.

                La Licenciatura en Psicología me ha permitido adquirir muchos 
                conocimientos a nivel teórico pero también personal, 
                ayudándome a ser una profesional que tiene como principio 
                fundamental la ética, el esfuerzo y la capacitación. 

                Al ser una carrera con múltiples aristas, me permite desempeñarme
                en diversas áreas de interés y a su vez, seguir aprendiendo y 
                formándome constantemente.

            </p>
        
        </div>

    </div>
  )
}

export default Header