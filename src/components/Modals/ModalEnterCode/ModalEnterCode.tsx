import React, {useState} from 'react';

import './ModalEnterCode.scss';
import Modal from '../Modal/Modal';
import Icon from '../../UI/Icon/Icon';
import {useStore} from '../../../index';
import Input from '../../UI/Input/Input';
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton';
import LinkModal from '../../UI/LinkModal/LinkModal';
import SecondaryButton from '../../UI/SecondaryButton/SecondaryButton';
import {CODE} from '../../../utils/data';
import {useFormik} from 'formik';

interface Props {
  phoneNumber: string;
}

interface FormValues {
  code: string;
}

const ModalEnterCode: React.FC<Props> = ({phoneNumber}) => {
  const {modalStore: {clearCurrentModal}, authorizationStore: {setIsAuthenticated}} = useStore();

  const [isCodeWrong, setIsCodeWrong] = useState(false);

  const signIn = ({code}: FormValues) => {
    if (code === CODE) {
      setIsAuthenticated(true);
      clearCurrentModal();
    } else {
      setIsCodeWrong(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      code: ''
    },
    onSubmit: (values) => signIn(values)
  });

  const {handleSubmit, values, handleChange} = formik;

  return (
    <Modal>
      <div className='modal-enter-code'>
        <div className='modal-enter-code__container'>

          <div className='modal-enter-code__header'>
            <h2 className='modal-enter-code__title'>Ввести код</h2>
            <button
              className='modal-enter-code__close'
              type='button'
              onClick={() => clearCurrentModal()}
            ><Icon name='close' color='rgba(0, 11, 38, 0.72)' size={32} /></button>
          </div>

          <div className='modal-enter-code__body'>

            <h6 className='modal-enter-code__subtitle'>
              Введите код отправленный вам на телефон
              <span className='modal-enter-code__phone-number'><br />{phoneNumber}</span>
            </h6>

            <form onSubmit={handleSubmit}>

              <div className='modal-enter-code__input'>
                <Input
                  id='code'
                  name='code'
                  value={values.code}
                  onChange={handleChange}
                  placeholder='Код'
                  type='text'
                  style={{borderColor: isCodeWrong ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                />
              </div>
              {isCodeWrong && <span className='modal-enter-code__alert'>Введите действительный код</span>}

              <div className='modal-enter-code__send-button'>
                <PrimaryButton>Отправить</PrimaryButton>
              </div>

            </form>

            <div className='modal-enter-code__link'>
              <LinkModal onClick={() => console.log('Did not get a code')}>Не получил(-а) код</LinkModal>
            </div>

            <div className='modal-enter-code__login-button-for-partners'>
              <SecondaryButton onClick={() => console.log('Login button for partners was pressed')}>Вход для партнёров</SecondaryButton>
            </div>

          </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalEnterCode;