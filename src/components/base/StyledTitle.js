import React from 'react';
import './../../sass/components/base/Title.scss';

const StyledTitle = ({ text, level, color }) => {
  return (
    <div
      className={`Title Title-${level}`}
      style={{ color }}
      data-title={text}
    >
      {text}
    </div>
  );
};

export default StyledTitle;
