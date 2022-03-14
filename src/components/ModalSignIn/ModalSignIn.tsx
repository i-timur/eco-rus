import React, {useState} from 'react';
import * as Yup from 'yup';

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
import {useFormik} from 'formik';
import {PHONE_NUMBER_REGEXP} from '../../utils/utils';

interface FormValues {
  phoneNumber: string;
  password: string
}

const SignInSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(PHONE_NUMBER_REGEXP, 'Phone number is not valid')
    .required('Phone number is required'),
  password: Yup.string().required('Password is required')
});

const ModalSignIn: React.FC = () => {
  const {modalStore: {clearCurrentModal, setCurrentModal}, authorizationStore: {setIsAuthenticated}} = useStore();

  const [toShowAlert, setToShowAlert] = useState(false);

  const handleSignIn = ({phoneNumber, password}: FormValues) => {
    if (phoneNumber === PHONE_NUMBER && password === PASSWORD) {
      setIsAuthenticated(true);
      clearCurrentModal();
    } else {
      setToShowAlert(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => handleSignIn(values)
  });

  const {errors, touched} = formik;

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

              <form onSubmit={formik.handleSubmit}>

                <div className='modal-authentication__inputs'>

                  <div className='modal-authentication__input'>
                    <Input
                      id='phoneNumber'
                      name='phoneNumber'
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      placeholder='Телефон'
                      type='text'
                      style={{borderColor: errors.phoneNumber && touched.phoneNumber ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                    />
                  </div>
                  {errors.phoneNumber && touched.phoneNumber && <span className='modal-authentication__alert'>{errors.phoneNumber}</span>}

                  <div className='modal-authentication__input'>
                    <Input
                      id='password'
                      name='password'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder='Пароль'
                      type='password'
                      style={{borderColor: errors.password && touched.password ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                    />
                  </div>
                  {errors.password && touched.password && <span className='modal-authentication__alert'>{errors.password}</span>}

                </div>
                {toShowAlert && <span className='modal-authentication__alert'>Введенный вами логин или пароль не верен</span>}

                <div className='modal-authentication__login-button'>
                  <PrimaryButton>Войти</PrimaryButton>
                </div>

              </form>

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