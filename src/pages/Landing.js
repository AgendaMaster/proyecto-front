import React from 'react';
import { StyledImage, StyledTitle } from '../components/base';

import Logo from '../assets/images/logo.svg';
import PlantBook from '../assets/images/plant-book.svg';
import Compass from '../assets/images/compass.svg';
import DrawTools from '../assets/images/draw-tools.svg';
import Computer from '../assets/images/computer.svg';
import '../sass/pages/landing.scss'

import Button from '../components/base/Button';

const COLOR = 'purple-1';


export function Landing() {


  const TEAM_INFO = [
    {
      name: 'Raziel Carvajal',
      team: 'Frontend',
      avatar: 'https://avatars3.githubusercontent.com/u/181764?s=460&u=a0a2ce2498fc3316e00a27a8ac14bbcb17dd1c30&v=4'
    },
    {
      name: 'Nicolás Arias',
      team: 'Frontend',
      avatar: 'https://avatars1.githubusercontent.com/u/24924906?s=400&u=d29ade84aae0c65741822d04b51bf8dfa7de5617&v=4'
    },
    {
      name: 'Mariangélica Useche',
      team: 'Frontend',
      avatar: 'https://avatars0.githubusercontent.com/u/22798836?s=400&u=bb96efb4f1e915eaaf4537271400a4f13b25574b&v=4'
    },
    {
      name: 'Daniel Valderrama',
      team: 'Frontend',
      avatar: 'https://avatars1.githubusercontent.com/u/58479621?s=400&u=417387b5049b4c1bb2551f16575ed42c50427e01&v=4'
    },
    {
      name: 'Santiago Andres Duque Moreno',
      team: 'Backend',
      avatar: 'https://avatars0.githubusercontent.com/u/41799763?s=400&u=bb3e2c2bfa6e8602ec8d0efb33a667754c6eaceb&v=4'
    },
    {
      name: 'Heyner Javier Marmol',
      team: 'Backend',
      avatar: 'https://avatars2.githubusercontent.com/u/3501269?s=400&u=86b37904a878af1b68af0286491690fae52e5841&v=4'
    },
    {
      name: 'Gabriel Zarate',
      team: 'Backend',
      avatar: 'https://avatars2.githubusercontent.com/u/54913346?s=400&u=8b3d3da04f53f5b17eebd20838e6b4cbbc4e53e0&v=4'
    },
    {
      name: 'Andrés Felipe Carrion',
      team: 'Backend',
      avatar: 'https://avatars3.githubusercontent.com/u/42750251?s=400&u=4b6ee47a1798be48a916b6cd2e1786b148b8cd52&v=4'
    },
  ]

  return (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-header-logo">
          <img src={Logo} alt='App logo (colorful brain)' /> UDIARY
        </div>
        <div className="landing-header-menu">
          <nav>
            <div role="button" className="hamburguer-button">
              Menu
            </div>
            <ul>
              <li>Work</li>
              <li>Planes</li>
              <li>Equipo</li>
              <li>Contactanos</li>
              <li>Iniciar Sesion</li>
              <li class="landing-header-menu-register">Registrarme</li>
            </ul>
          </nav>
        </div>
      </div>
      <section className="landing-section-hero">
        <p>ORDENA TU TIEMPO</p>
      </section>
      <section className="landing-section-1">
        <div className="landing-container text-center">
          <h2>Unimos nodos productivos bajo un mismo fin.</h2>
          <p>Construir soluciones para empresas de todos los sectores.</p>
          <Button text='SendQUIERO SABER MAS +' color={COLOR} />
        </div>
      </section>

      <section className="landing-section-2">
        <div className="landing-container text-center">
          <div className="section-area-01">
            <StyledImage
              text='01'
              top='-40px'
              direction='left'
              fontSize='8em'
              opacity={0.1}
              fontWeight={700}
              color='#31a9ab'
            >
              <img src={PlantBook} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Conceptualizamos</h2>
            <p className="text-align-right">
              Creemos que la columna vertebral de un proyecto debe estar basado en un concepto coherente con la identidad de la marca.
            </p>
          </div>
          <div className="section-area-02">
            <StyledImage
              text='02'
              top='-40px'
              direction='right'
              fontSize='8em'
              opacity={0.1}
              fontWeight={700}
              color='#31a9ab'
            >
              <img src={Compass} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Guiamos</h2>
            <p className="text-align-left">
              Acompañamos el proceso de toma de decisiones de nuestros clientes, somos su aliado estratégico a la hora de generar resultados.
            </p>
          </div>
          <div className="section-area-03">
            <StyledImage
              text='03'
              top='-40px'
              direction='left'
              fontSize='8em'
              opacity={0.1}
              fontWeight={700}
              color='#31a9ab'
            >
              <img src={Computer} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Desarrollamos</h2>
            <p className="text-align-right">
              Nuestro equipo multidisciplinario resuelve productivamente las solicitudes de los clientes para entregar un resultado satisfactorio.
            </p>
          </div>
          <div className="section-area-04">
            <StyledImage
              text='04'
              top='-40px'
              direction='right'
              fontSize='8em'
              opacity={0.1}
              fontWeight={700}
              color='#31a9ab'
            >
              <img src={DrawTools} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Diseñamos</h2>
            <p className="text-align-left">
              Somos expertos en convertir el ADN de la marca en una identidad gráfica, un lenguaje que comunique los valores.
            </p>
          </div>
        </div>
      </section>
      <section className="landing-section-3">
        <div className="landing-container text-center">
          <StyledTitle text="Equipo" level={2} color="landing" />

          <div className="team-container">
            {
              TEAM_INFO.map((person,i)=> (
                <div className="team-person" key={`team-${i}`}>
                  <img src={person.avatar} alt={person.name}/>
                  <h2>{person.name}</h2>
                  <p>{person.team}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="landing-section-4">
        <div className="landing-container text-center">
          <h3>ponte en contacto</h3>
          <p>¡Es tan sencillo como saber que le escribes a un amigo, un aliado!</p>
          <div className="form-container">
            <div>
              <input placeholder="Nombre Completo" />
              <input placeholder="Correo" />
            </div>
            <input placeholder="¿En que podemos ayudarte?" />
          </div>
        </div>
      </section>
    </div>
  )
}
