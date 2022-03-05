import React, {useState} from 'react';
import Modal from '../Modal/Modal';

import './ModalSignInWithPhone.scss';
import Icon from '../Icon/Icon';
import {useStore} from '../../index';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import LinkModal from '../LinkModal/LinkModal';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import ModalEnterCode from '../ModalEnterCode/ModalEnterCode';
import ModalSignIn from '../ModalSignIn/ModalSignIn';
import {PHONE_NUMBER_REGEXP} from '../../utils/utils';

const ModalSignInWithPhone: React.FC = () => {
  const {modalStore: {clearCurrentModal, setCurrentModal}} = useStore();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [toShowAlert, setToShowAlert] = useState(false);

  const getCode = () => {
    if (PHONE_NUMBER_REGEXP.test(phoneNumber)) {
      setCurrentModal(<ModalEnterCode phoneNumber={phoneNumber} />);
    } else {
      setToShowAlert(true);
      setTimeout(() => {
        setToShowAlert(false);
      }, 3000);
    }
  };

  return (
    <Modal>
      <div className='modal-sign-up'>
        <div className='modal-sign-up__container'>

          <div className='modal-sign-up__header'>
            <h2 className='modal-sign-up__title'>Вход или регистрация</h2>
            <button
              className='modal-sign-up__close'
              type='button'
              onClick={() => clearCurrentModal()}
            ><Icon name='close' color='rgba(0, 11, 38, 0.72)' size={32} /></button>
          </div>


          <div className='modal-sign-up__body'>

              <div className='modal-sign-up__input'>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder='Телефон'
                  type='tel'
                />
              </div>
            {toShowAlert && <span className='modal-sign-up__alert'>Введите существующий номер телефона</span>}

            <div className='modal-sign-up__get-code-button'>
              <PrimaryButton onClick={getCode}>Получить код</PrimaryButton>
            </div>

            <div className='modal-sign-up__link'>
              <LinkModal onClick={() => setCurrentModal(<ModalSignIn />)}>Я уже зарегистировался(-ась)</LinkModal>
            </div>

            <div className='modal-sign-up__login-button-for-partners'>
              <SecondaryButton onClick={() => console.log('Login button for partners was pressed')}>Вход для партнёров</SecondaryButton>
            </div>

            </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalSignInWithPhone;