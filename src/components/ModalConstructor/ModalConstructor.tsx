import {FC} from 'react';
import {cloneElement} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../index';

const ModalConstructor: FC = observer(() => {
  const {modalStore: {currentModal}} = useStore();

  if (currentModal) {
    return cloneElement(currentModal);
  } else {
    return null;
  }
});

export default ModalConstructor;