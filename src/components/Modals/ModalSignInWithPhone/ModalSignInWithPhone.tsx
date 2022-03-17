import React from 'react';
import * as Yup from 'yup';

import Modal from '../Modal/Modal';
import './ModalSignInWithPhone.scss';
import Icon from '../../UI/Icon/Icon';
import {useStore} from '../../../index';
import Input from '../../UI/Input/Input';
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton';
import LinkModal from '../../UI/LinkModal/LinkModal';
import SecondaryButton from '../../UI/SecondaryButton/SecondaryButton';
import ModalEnterCode from '../ModalEnterCode/ModalEnterCode';
import ModalSignIn from '../ModalSignIn/ModalSignIn';
import {PHONE_NUMBER_REGEXP} from '../../../utils/utils';
import {useFormik} from 'formik';
import ModalSignInForPartner from '../ModalSignInForPartner/ModalSignInForPartner';

interface FormValues {
  phoneNumber: string;
}

const SignInWithPhoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(PHONE_NUMBER_REGEXP, 'Phone number is not valid')
    .required('Phone number is required')
});

const ModalSignInWithPhone: React.FC = () => {
  const {modalStore: {clearCurrentModal, setCurrentModal}} = useStore();

  const sendCode = ({phoneNumber}: FormValues) => {
      setCurrentModal(<ModalEnterCode phoneNumber={phoneNumber} />);
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: ''
    },
    validationSchema: SignInWithPhoneSchema,
    onSubmit: (values) => sendCode(values)
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

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

            <form onSubmit={handleSubmit}>

              <div className='modal-sign-up__input'>
                <Input
                  id='phoneNumber'
                  name='phoneNumber'
                  value={values.phoneNumber}
                  onChange={handleChange}
                  placeholder='Телефон'
                  type='tel'
                  style={{borderColor: errors.phoneNumber && touched.phoneNumber ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                />
              </div>
              {errors.phoneNumber && touched.phoneNumber && <span className='modal-sign-up__alert'>{errors.phoneNumber}</span>}

              <div className='modal-sign-up__get-code-button'>
                <PrimaryButton>Получить код</PrimaryButton>
              </div>

            </form>

            <div className='modal-sign-up__link'>
              <LinkModal onClick={() => setCurrentModal(<ModalSignIn />)}>Я уже зарегистировался(-ась)</LinkModal>
            </div>

            <div className='modal-sign-up__login-button-for-partners'>
              <SecondaryButton onClick={() => setCurrentModal(<ModalSignInForPartner />)}>Вход для партнёров</SecondaryButton>
            </div>

            </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalSignInWithPhone;