import React, {PropsWithChildren} from 'react';

import './SecondaryButton.scss';
import {getBtnHeight} from '../../../utils/utils';

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: string;
}

const SecondaryButton: React.FC<PropsWithChildren<Props>> = ({onClick, size= 'm', children}) => {
  return (
    <div className='secondary-button-container'>
      <button
        className='secondary-button-container__button'
        type='submit'
        onClick={onClick}
        style={{
          minHeight: getBtnHeight(size)
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default SecondaryButton;
