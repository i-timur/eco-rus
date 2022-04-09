import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import './ModalRegistration.scss';
import {useStore} from '../../../index';
import Modal from '../Modal/Modal';
import Icon from '../../UI/Icon/Icon';
import Input from '../../UI/Input/Input';
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton';
import LinkModal from '../../UI/LinkModal/LinkModal';
import SecondaryButton from '../../UI/SecondaryButton/SecondaryButton';
import ModalSignInForPartner from '../ModalSignInForPartner/ModalSignInForPartner';
import {getHttpClient} from '../../../utils/utils';
import ModalSignIn from '../ModalSignIn/ModalSignIn';

interface FormValues {
  userName: string;
  phoneNumber: string;
  password: string
}

const SignUpSchema = Yup.object().shape({
  userName: Yup.string().required(),
  phoneNumber: Yup.string()
    .required('Phone number is required'),
  password: Yup.string().required('Password is required')
});

const ModalSignUpForPartner = () => {
  const {modalStore: {clearCurrentModal, setCurrentModal}, userStore: {authorize}} = useStore();

  const [toShowAlert, setToShowAlert] = useState(false);

  const http = getHttpClient();

  const signUpSuccess = () => {
    clearCurrentModal();
    setCurrentModal(<ModalSignIn />);
  };

  const signUpFailure = (error: Error) => console.error(error.message);


  const signUp = (values: FormValues) => {
    http.post('/account', {
      phone_number: values.phoneNumber,
      password: values.password,
      username: values.userName
    })
      //@ts-ignore
      .then(signUpSuccess, signUpFailure)
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      phoneNumber: '',
      password: ''
    },
    validationSchema: SignUpSchema,
    onSubmit: (values: FormValues) => signUp(values)
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

  return (
    <Modal>
      <div className='modal-registration'>
        <div className='modal-registration__container'>

          <div className='modal-registration__header'>
            <h2 className='modal-registration__title'>Регистрация</h2>
            <button
              className='modal-registration__close'
              type='button'
              onClick={() => clearCurrentModal()}
            ><Icon name='close' color='rgba(0, 11, 38, 0.72)' size={32} /></button>
          </div>

          <div className='modal-registration__body'>

            <form onSubmit={handleSubmit}>

              <div className='modal-registration__inputs'>

                <div className='modal-registration__input'>
                  <Input
                    id='userName'
                    name='userName'
                    value={values.userName}
                    onChange={handleChange}
                    placeholder='Имя пользователя'
                    type='text'
                    style={{borderColor: errors.userName && touched.userName ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                  />
                </div>
                {errors.userName && touched.userName && <span className='modal-registration__alert'>{errors.userName}</span>}

                <div className='modal-sign-in-for-partner__input'>
                  <Input
                    id='phoneNumber'
                    name='phoneNumber'
                    value={values.phoneNumber}
                    onChange={handleChange}
                    placeholder='Номер телефона'
                    type='text'
                    style={{borderColor: errors.phoneNumber && touched.phoneNumber ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                  />
                </div>
                {errors.phoneNumber && touched.phoneNumber && <span className='modal-sign-in-for-partner__alert'>{errors.phoneNumber}</span>}

                <div className='modal-registration__input'>
                  <Input
                    id='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder='Пароль'
                    type='password'
                    style={{borderColor: errors.password && touched.password ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                  />
                </div>
                {errors.password && touched.password && <span className='modal-registration__alert'>{errors.password}</span>}

              </div>
              {toShowAlert && !(errors.userName || errors.phoneNumber || errors.password) && <span className='modal-registration__alert'>Введенный вами email уже используется</span>}


              <div className='modal-registration__login-button'>
                <PrimaryButton>Зарегистрироваться</PrimaryButton>
              </div>

            </form>

            <div className='modal-registration__links'>

              <div className='modal-registration__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalSignInForPartner />)}>Я уже зарегистировался(-ась)</LinkModal>
              </div>

            </div>

            <div className='modal-registration__login-button-for-partners'>
              <SecondaryButton onClick={() => setCurrentModal(<ModalSignInForPartner />)}>Вход для партнёров</SecondaryButton>
            </div>

          </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalSignUpForPartner;
