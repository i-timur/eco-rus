import React, {PropsWithChildren} from 'react';

import './LinkModal.scss';

interface Props {
  onClick: () => void;
}

const LinkModal: React.FC<PropsWithChildren<Props>> = ({onClick, children}) => {
  return  <p className='link-modal' onClick={onClick}>{children}</p>;
};

export default LinkModal;