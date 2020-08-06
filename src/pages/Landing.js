import React from "react";
import "../sass/pages/landing.scss";
import iconhome from "../../src/assets/images/iconHome.svg";
import cliente1 from "../../src/assets/images/cliente1.svg";
import cliente2 from "../../src/assets/images/cliente2.svg";
import Button from '../components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faCode, faHandsHelping, faPalette } from '@fortawesome/free-solid-svg-icons'
import { StyledTitle } from "../components/base";

export function Landing() {
      const handleSubmit = () => console.log('Submitting...');
      const COLOR = 'secondary';
      const COLOR2 = 'primary';
      return (
            <div className='landing'>
                  <div className='home'>
                        <div className='titleLanding'>
                              <img src={ iconhome } alt='iconhome' className='iconHome' />
                              <h3 className='udiary'>UDIARY</h3>
                        </div>
                        <div className='ingreso'>
                              <a href='#work' className='workHome'>WORK</a>
                              <a href='#equipo' className='equipoHome'>EQUIPO</a>
                              <a href='#contacto' className='contactoHome'>CONTACTOS</a>
                              <a href='#sesion' className='sesionHome'>INICIAR SESION</a>
                        </div>
                        <h5 className='titleHome2'>ORDENA TU TIEMPO</h5>
                  </div>
                  <div className='work'>
                        <h1 className='worktitle'>Unimos nodos productivos bajo un mismo fin</h1>
                        <h5 className='worktitle2'>Construir soluciones para empresas de todos los sectores</h5>
                        <Button text='Quiero saber +' onClick={ handleSubmit } color={ COLOR } className='saberMas' />
                  </div>
                  <div className='work2'>
                        <FontAwesomeIcon icon={ faLightbulb } className='conceptualIcon' size='5x' />
                        <h1 className='conceptualtitle'>Conceptualizamos</h1>
                        <p className='conceptualText'>Creemos que la columna vertebral de un proyecto debe estar basado en un concepto coherente con la identidad de la marca.</p>
                        <FontAwesomeIcon icon={ faCode } className='developIcon' size='5x' />
                        <h1 className='developtitle'>Desarrollamos</h1>
                        <p className='developText'>Nuestro equipo multidisciplinario resuelve productivamente las solicitudes de los clientes para entregar un resultado satisfactorio.</p>
                        <FontAwesomeIcon icon={ faHandsHelping } className='guiaIcon' size='5x' />
                        <h1 className='guiatitle'>Guiamos</h1>
                        <p className='guiaText'>Acompañamos el proceso de toma de decisiones de nuestros clientes, somos su aliado estratégico a la hora de generar resultados.</p>
                        <FontAwesomeIcon icon={ faPalette } className='diseñoIcon' size='5x' />
                        <h1 className='diseñotitle'>Diseñamos</h1>
                        <p className='diseñoText'>Somos expertos en convertir el ADN de la marca en una identidad gráfica, un lenguaje que comunique los valores.</p>
                  </div>
                  <div className='clientes'>
                        <StyledTitle text='clientes' level={ 1 } color={ COLOR } />
                        <div className='clienteImg'>
                              <img src={ cliente1 } alt='iconhome' className='cliente1' />
                              <img src={ cliente2 } alt='iconhome' className='cliente2' />
                        </div>
                  </div>
                  <div className='soluciones'>
                        <h5 className='soluciontitle'>Soluciones de agendamiento y comunicación para empresas</h5>
                        <Button text='Quiero saber +' onClick={ handleSubmit } color={ COLOR } className='saberMasSolucion' />
                  </div>
                  <div className='equipo'>
                        <StyledTitle text='Equipo' level={ 1 } color={ COLOR2 } />
                        <div className='equipo2'>
                              <div className='equipoImg'></div>
                              <div className='equipoImg'></div>
                              <div className='equipoImg'></div>
                              <div className='equipoImg'></div>
                              <div className='equipoImg'></div>
                        </div>
                  </div>
                  <div className='contacto'>
                        <h3 className='contacto2'>ponte en contacto</h3>
                        <p className='contacto3'>¡Es tan sencillo como saber que le escribes a un amigo, un aliado!</p>
                        <div className='datos'>
                              <input className='nombre' placeholder='Nombre Completo'></input>
                              <input className='correo'  placeholder='Correo' type='email'></input>
                        </div>
                        <input className='ayuda'  placeholder='En que podemos ayudarte?'></input>

                  </div>
            </div>
      );
}
