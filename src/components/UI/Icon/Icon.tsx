import React from 'react';

interface Props {
  name: string;
  size?: number | string;
  color: string;
}

const Icon: React.FC<Props> = ({name, size = 24, color}) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        width:`${size}px`,
        height: `${size}px`,
        fill: color
      }}
    >
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;