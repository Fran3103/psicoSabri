import React from 'react'
import lineas from '../../Imagenes/Iconos/Recurso 2.png';
import circulos from '../../Imagenes/Iconos/Recurso 1.png';
import style from './fondo.module.css'

const Fondos = () => {
  return (
    <div className={style.contenedor} >
        <img src={lineas} alt="lineas" className={style.lineas} />
        <img src={circulos} alt="circulos" className={style.circulos}/>

    </div>
  )
}

export default Fondos