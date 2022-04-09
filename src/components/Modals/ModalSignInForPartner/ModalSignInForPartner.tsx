import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import './ModalSignInForPartner.scss';
import {useStore} from '../../../index';
import Modal from '../Modal/Modal';
import Icon from '../../UI/Icon/Icon';
import Input from '../../UI/Input/Input';
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton';
import LinkModal from '../../UI/LinkModal/LinkModal';
import ModalSignInWithPhone from '../ModalSignInWithPhone/ModalSignInWithPhone';
import ModalSignUpForPartner from '../ModalSignUpForPartner/ModalSignUpForPartner';
import {getHttpClient} from '../../../utils/utils';
import {UserDto} from '../../../dtos/UserDto';

interface FormValues {
  email: string;
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

const ModalSignInForPartner = () => {
  const {modalStore: {clearCurrentModal, setCurrentModal}, userStore: {authorize}} = useStore();

  const [toShowAlert, setToShowAlert] = useState(false);

  const http = getHttpClient();

  const signInSuccess = (user: UserDto) => {
    authorize(user.token!);
    clearCurrentModal();
  };


  const signIn = ({email, password}: FormValues) => {
    http.post('/login', {
      email,
      password
    })
      //@ts-ignore
      .then(signInSuccess);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => signIn(values)
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

  return (
    <Modal>
      <div className='modal-sign-in-for-partner'>
        <div className='modal-sign-in-for-partner__container'>

          <div className='modal-sign-in-for-partner__header'>
            <h2 className='modal-sign-in-for-partner__title'>Вход</h2>
            <button
              className='modal-sign-in-for-partner__close'
              type='button'
              onClick={() => clearCurrentModal()}
            ><Icon name='close' color='rgba(0, 11, 38, 0.72)' size={32} /></button>
          </div>

          <div className='modal-sign-in-for-partner__body'>

            <form onSubmit={handleSubmit}>

              <div className='modal-sign-in-for-partner__inputs'>

                <div className='modal-sign-in-for-partner__input'>
                  <Input
                    id='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder='Email'
                    type='text'
                    style={{borderColor: errors.email && touched.email ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                  />
                </div>
                {errors.email && touched.email && <span className='modal-sign-in-for-partner__alert'>{errors.email}</span>}

                <div className='modal-sign-in-for-partner__input'>
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
                {errors.password && touched.password && <span className='modal-sign-in-for-partner__alert'>{errors.password}</span>}

              </div>
              {toShowAlert && !(errors.email || errors.password) && <span className='modal-sign-in-for-partner__alert'>Введенный вами логин или пароль не верен</span>}

              <div className='modal-sign-in-for-partner__login-button'>
                <PrimaryButton>Войти</PrimaryButton>
              </div>

            </form>

            <div className='modal-sign-in-for-partner__links'>

              <div className='modal-sign-in-for-partner__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalSignInWithPhone />)}>Войти с помощью смс</LinkModal>
              </div>

              <div className='modal-sign-in-for-partner__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalSignUpForPartner />)}>Регистрация</LinkModal>
              </div>

            </div>

          </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalSignInForPartner;
