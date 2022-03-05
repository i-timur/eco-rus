import React, {useState} from 'react';
import {useStore} from '../../index';
import Modal from '../Modal/Modal';
import Icon from '../Icon/Icon';

import './ModalSignIn.scss';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import LinkModal from '../LinkModal/LinkModal';
import ModalSignInWithPhone from '../ModalSignInWithPhone/ModalSignInWithPhone';
import {PASSWORD, PHONE_NUMBER} from '../../utils/data';

const ModalSignIn: React.FC = () => {
  const {modalStore: {clearCurrentModal, setCurrentModal}, authorizationStore: {setIsAuthenticated}} = useStore();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (phoneNumber === PHONE_NUMBER && password === PASSWORD) {
      setIsAuthenticated(true);
      clearCurrentModal();
    } else {
      setPhoneNumber('');
      setPassword('');
    }
  };

  return (
    <Modal>
      <div className='modal-authentication'>
        <div className='modal-authentication__container'>

          <div className='modal-authentication__header'>
            <h2 className='modal-authentication__title'>Вход</h2>
            <button
              className='modal-authentication__close'
              type='button'
              onClick={() => clearCurrentModal()}
            ><Icon name='close' color='rgba(0, 11, 38, 0.72)' size={32} /></button>
          </div>

          <div className='modal-authentication__body'>

            <div className='modal-authentication__inputs'>

              <div className='modal-authentication__input'>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder='Телефон'
                  type='text'
                />
              </div>

              <div className='modal-authentication__input'>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Пароль'
                  type='password'
                />
              </div>

            </div>

            <div className='modal-authentication__login-button'>
              <PrimaryButton onClick={handleSignIn}>Войти</PrimaryButton>
            </div>

            <div className='modal-authentication__links'>

              <div className='modal-authentication__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalSignInWithPhone />)}>Войти с помощью смс</LinkModal>
              </div>

              <div className='modal-authentication__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalSignInWithPhone />)}>Регистрация</LinkModal>
              </div>

            </div>

            <div className='modal-authentication__login-button-for-partners'>
              <SecondaryButton onClick={() => console.log('Login button for partners was pressed')}>Вход для партнёров</SecondaryButton>
            </div>

          </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalSignIn;