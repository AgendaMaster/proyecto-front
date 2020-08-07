import React from 'react';
import { Link } from 'react-router-dom';
import './../../sass/components/layout/RightNav.scss';

const RightNav = ({ open }) => {
  let openBtn = open ? "RightNav" : "RightNav-open";
  return (
      <ul className={openBtn}>
        <li>
          <Link  to='/'>Inicio</Link>
        </li>
        <li>
          <Link  to='/eventos'>Eventos</Link>
        </li>
        <li>
          <Link  to='/CalendarPage'>Calendario</Link>
        </li>
        <li>
          <Link  to='/'>Cerrar sesión</Link>
        </li>
        <li>
          <input placeholder='Search' className='SearchBar-input' type='text' />
        </li>
      </ul>
  )
}

export default RightNav
