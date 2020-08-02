import React from "react";
import "../sass/pages/landing.scss";

export function Landing() {
  return (
    <div className='landing'>
      <div className='line26' />
      <h3 className='udiary'>UDIARY</h3>
      <img
        src='/static/media/logo.8bfe772d.svg'
        alt='App logo (colorful brain)'
        className='imgLanding'
      />
      <div>
        <a className='work'>WORK</a>
        <a className='plan'>PLANES</a>
        <a className='equipo'>EQUIPO</a>
        <a className='contactos'>CONTACTOS</a>
        <a className='iniciarSesion'>INICIAR SESION</a>
        <div className='registro'>
          <button className='registrarme'>REGISTRARME</button>
        </div>
      </div>
      <div className='seccion2'>
        <h3 className='unidos'>Unimos nodos productivos bajo un mismo fin:</h3>
        <p className='unidos2'>
          Construir soluciones para empresas de todos los sectores
        </p>
        <div className='grupo117'>
          <div className='saber'>
            <button className='quieromas'>Quiero saber +</button>
          </div>
        </div>
      </div>
      <div className='frame'>
        <div className='grupoframe1'>
          <div className='grupofram2'></div>
          <div className='grupofram3'></div>
        </div>
      </div>
    </div>
  );
}
