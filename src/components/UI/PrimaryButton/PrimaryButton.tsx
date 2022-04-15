import React, {PropsWithChildren} from 'react';

import './PrimaryButton.scss';
import {getBtnHeight} from '../../../utils/utils';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: string;
}

const PrimaryButton: React.FC<PropsWithChildren<Props>> = ({onClick, size= 'm', children}) => {
  return (
    <div className='primary-button-container'>
      <button
        className='primary-button-container__button'
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

export default PrimaryButton;
