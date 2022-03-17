import React from 'react';

import './SliderButton.scss';

interface Props {
  to: string;
}

const SliderButton: React.FC<Props> = ({ to, children}) => {
  return (
      <a
        href={to}
        className='primary-button'
      >
        {children}
      </a>
  );
};

export default SliderButton;