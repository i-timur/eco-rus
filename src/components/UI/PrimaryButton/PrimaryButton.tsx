import React, {PropsWithChildren} from 'react';

import './PrimaryButton.scss';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: React.FC<PropsWithChildren<Props>> = ({onClick, children}) => {
  return (
    <div className='primary-button-container'>
      <button
        className='primary-button-container__button'
        type='submit'
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;