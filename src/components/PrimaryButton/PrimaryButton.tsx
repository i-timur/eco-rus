import React from 'react';

import './PrimaryButton.scss';

interface Props {
  to: string;
}

const PrimaryButton: React.FC<Props> = ({ to, children}) => {
  return (
      <a
        href={to}
        className='primary-button'
      >
        {children}
      </a>
  );
};

export default PrimaryButton;