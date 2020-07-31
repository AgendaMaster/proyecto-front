import React from 'react';
import './../../sass/components/layout/RightNav.scss';

const RightNav = ({ open }) => {
  let openBtn = open ? "RightNav" : "RightNav-open";
  return (
      <ul className={openBtn}>
        <li>Inicio</li>
        <li>Eventos</li>
        <li>Tickets</li>
        <li>Calendario</li>
        <li>Cerrar sesión</li>
        <li>
          <input placeholder='Search' className='SearchBar-input' type='text' />
        </li>
      </ul>
  )
}

export default RightNav
