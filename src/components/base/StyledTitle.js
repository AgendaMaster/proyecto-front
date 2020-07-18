import React from 'react';
import './../../sass/components/base/Title.scss';

/**
 * Renderiza el título doble.
 *
 * Colores soportados: [`primary`, `secondary`].
 * Nivele soportados: [1-3]
 */
const StyledTitle = ({ text, level, color }) => {
  return (
    <div
      className={`Title Title-${level} Color-${color}`}
      data-title={text}
    >
      {text}
    </div>
  );
};

export default StyledTitle;
