import React from 'react'
import './header.css'
import imagen from '../../src/Imagenes/foto.png'
import imagen2 from '../../src/Imagenes/Tablet/chica-libro.jpg'
import imagen3 from '../../src/Imagenes/Tablet/chicos-espalda.jpg'

const Header = () => {
  return (
    
      <div id="carouselExampleAutoplaying" class="carousel container-md slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div className="imagenDescripcion">
                <img src={imagen} class="d-block w-100" alt="..."/>
                <div className="descripcion">
                    <h1>
                        Acerca de mí
                    </h1>
                    <h3>

                        Sabrina Morocho - Licenciada en Psicología
                    
                    </h3>
                    <h3>
                        Graduada en la Universidad de Ciencias Empresariales y Sociales  (UCES)
                        
                    </h3>

                    <p >
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
        
        </div>
        <div class="carousel-item">
        <img src={imagen2} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src={imagen3} class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    //         <div className={style.contenedor}>
    //     <div className={style.imgprincipal}>
    //         <img src={imagen} alt="imagen principal" />
    //     </div>
    //     <div className={style.sobremi}>
        
            
        
    //     </div>

    // </div>
  )
}

export default Header