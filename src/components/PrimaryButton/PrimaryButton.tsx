import React from 'react';

import './PrimaryButton.scss';

interface Props {
  width: number;
  height: number;
  to: string;
}

const PrimaryButton: React.FC<Props> = ({width, height, to, children}) => {
  return (
      <a
        href={to}
        className='primary-button'
        style={{
          width,
          height
        }}
      >
        {children}
      </a>
  );
};

export default PrimaryButton;