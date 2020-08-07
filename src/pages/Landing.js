import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledImage, StyledTitle } from '../components/base';
import Button from '../components/base/Button';
import { Footer } from '../components/layout/Footer';

import Logo from '../assets/images/logo.svg';
import PlantBook from '../assets/images/plant-book.svg';
import Compass from '../assets/images/compass.svg';
import DrawTools from '../assets/images/draw-tools.svg';
import Computer from '../assets/images/computer.svg';

import { TEAM_INFO } from '../constants/team';

import '../sass/pages/landing.scss'

const COLOR = '#31a9ab';

export function Landing() {

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
              <li><a href='#about'>Sobre Nosotros</a></li>
              <li><a href='#team'>Equipo</a></li>
              <li><a href='#contact'>Contáctanos</a></li>
              <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
              <li class="landing-header-menu-register"><NavLink to="/sign-up">Registrarme</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
      <section className="landing-section-hero">
        <p>Reserva tu cupo en los mejores eventos</p>
      </section>
      <section className="landing-section-1">
        <div className="landing-container text-center">
          <h2>Ahorra tiempo y llamadas</h2>
          <p>Reserva online y maneja tu calendario de eventos</p>
          <a href="#contact"><Button text='QUIERO SABER MAS +' color='secondary' /></a>
        </div>
      </section>

      <section className="landing-section-2" id="about">
        <div className="landing-container text-center">
          <div className="section-area-01">
            <StyledImage
              text='01'
              top='-40px'
              direction='left'
              fontSize='8em'
              opacity={0.1}
              fontWeight={700}
              color={COLOR}
            >
              <img src={PlantBook} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Explora</h2>
            <p className="text-align-right">
              Revisa los eventos sugeridos de acuerdo a tus gustos.
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
              color={COLOR}
            >
              <img src={Compass} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Conoce</h2>
            <p className="text-align-left">
              Lee la información del evento: ¿Quién lo organiza? ¿En qué horarios? ¿Qué ofrece?
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
              color={COLOR}
            >
              <img src={Computer} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Reserva</h2>
            <p className="text-align-right">
            Inscríbete al evento y reserva tu cupo. El evento lo podrás visualizar en tu calendario personalizado.
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
              color={COLOR}
            >
              <img src={DrawTools} alt='App logo (colorful brain)' />
            </StyledImage>
            <h2>Asiste</h2>
            <p className="text-align-left">
              Revisa tu correo y obtén tus pase personalizado al evento. ¡Disfruta tu momento!
            </p>
          </div>
        </div>
      </section>
      <section className="landing-section-3" id="team">
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
      <section className="landing-section-4" id="contact">
        <div className="landing-container text-center">
          <h3>Ponte en contacto</h3>
          <p>¡Es tan sencillo como saber que le escribes a un amigo, un aliado!</p>
          <div className="form-container">
            <div>
              <input placeholder="Nombre Completo" />
              <input placeholder="Correo" />
            </div>
            <input placeholder="¿En que podemos ayudarte?" />
            <Button text="Enviar" style={{marginTop: 25}} />
          </div>
        </div>
      </section>
      <Footer style={{ padding: 40 }} />
    </div>
  )
}
