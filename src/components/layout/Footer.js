import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/components/layout/Footer.scss';

const SocialMediaLink = ({ route, icon }) => (
  <a href={route} target='__blank' className='SocialMediaLink'>
    <i>{icon}</i>
  </a>
);

export function Footer({ socialMediaLinks = [] }) {
  return (
    <footer className='Footer'>
      <div className='Footer-infoLinks'>
        <Link className='Footer-infoLink' to='Contact'>
          Contacto
        </Link>
        <Link className='Footer-infoLink' to='Contact'>
          Preguntas frecuentes
        </Link>
      </div>
      <div className='Footer-socialMedia'>
        {socialMediaLinks.map((mediaLink) => (
          <SocialMediaLink
            key={mediaLink.route}
            route={mediaLink.route}
            icon={mediaLink.icon}
          />
        ))}
      </div>
    </footer>
  );
}
