import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/components/layout/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaLink = ({ route, icon }) => (
  <a href={route} target='__blank' className='SocialMediaLink'>
    <FontAwesomeIcon icon={icon} size='lg' />
  </a>
);

const socialMediaLinks = [
  {
    icon: faLinkedin,
    route: 'https://linkedin.com',
  },
  {
    icon: faTwitter,
    route: 'https://twitter.com',
  },
  {
    icon: faInstagram,
    route: 'https://instagram.com',
  },
];

export function Footer() {
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
