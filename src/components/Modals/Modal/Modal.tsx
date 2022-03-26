import React from 'react';
import {useStore} from '../../../index';
import Portal from '../../Portal/Portal';

const Modal: React.FC = ({children}) => {
  const {modalStore: {clearCurrentModal}} = useStore();

  return (
    <Portal>
      <div className='overlay' onClick={() => clearCurrentModal()}>
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;