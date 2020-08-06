import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/components/layout/RightNav.scss';

const RightNav = ({ open }) => {
  let openBtn = open ? "RightNav" : "RightNav-open";
  return (
      <ul className={openBtn}>
        <Link  to='/'>
        <li>Inicio</li>
        </Link>
        <Link  to='/eventos'>
          <li>Eventos</li>
        </Link>
        <Link  to='/CalendarPage'>
          <li>Calendario</li>
        </Link>
        <Link  to='/'>
          <li>Cerrar sesión</li>
        </Link>
        <li>
          <input placeholder='Search' className='SearchBar-input' type='text' />
        </li>
      </ul>
  )
}

export default RightNav
