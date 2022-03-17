import React, {PropsWithChildren} from 'react';

import './SecondaryButton.scss';

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SecondaryButton: React.FC<PropsWithChildren<Props>> = ({onClick, children}) => {
  return (
    <div className='secondary-button-container'>
      <button
        className='secondary-button-container__button'
        type='submit'
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default SecondaryButton;