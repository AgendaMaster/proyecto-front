import React from 'react';
import './../../sass/components/base/StyledImage.scss';

/**
 * Renderiza un texto detras del SVG.
 *
 * Colores soportados: [`primary`, `secondary`].
 * Nivele soportados: [1-3]
 */
const StyledImage = ({
  children,
  direction='left',
  text='',
  fontSize='',
  opacity=1,
  fontWeight=700
}) => {

  return (
    <div
      className={`Image--direction-${direction}`}
      data-text={text} 
      data-fontSize={fontSize} 
      data-opacity={parseInt(opacity)} 
      data-fontWeight={parseInt(fontWeight)} 
    >
      { children }
    </div>
  );
};

export default StyledImage;
