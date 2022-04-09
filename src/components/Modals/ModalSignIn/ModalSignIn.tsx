import React, {useState} from 'react';
import * as Yup from 'yup';

import {useStore} from '../../../index';
import Modal from '../Modal/Modal';
import Icon from '../../UI/Icon/Icon';
import './ModalSignIn.scss';
import Input from '../../UI/Input/Input';
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../UI/SecondaryButton/SecondaryButton';
import LinkModal from '../../UI/LinkModal/LinkModal';
import ModalSignInWithPhone from '../ModalSignInWithPhone/ModalSignInWithPhone';
import {useFormik} from 'formik';
import {getHttpClient, PHONE_NUMBER_REGEXP} from '../../../utils/utils';
import ModalSignInForPartner from '../ModalSignInForPartner/ModalSignInForPartner';
import {UserDto} from '../../../dtos/UserDto';
import ModalRegistration from '../ModalRegistration/ModalRegistration';

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
  const {modalStore: {clearCurrentModal, setCurrentModal}, authorizationStore: {setIsAuthenticated}, userStore: {authorize}} = useStore();

  const [toShowAlert, setToShowAlert] = useState(false);

  const http = getHttpClient();

  const signInSuccess = (user: UserDto) => {
    authorize(user.token!);
    clearCurrentModal();
  };


  const signIn = ({phoneNumber, password}: FormValues) => {
    http.post('/login', {
        login: phoneNumber,
        password: password
      })
      //@ts-ignore
      .then(signInSuccess);
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => signIn(values)
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

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

              <form onSubmit={handleSubmit}>

                <div className='modal-authentication__inputs'>

                  <div className='modal-authentication__input'>
                    <Input
                      id='phoneNumber'
                      name='phoneNumber'
                      value={values.phoneNumber}
                      onChange={handleChange}
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
                      value={values.password}
                      onChange={handleChange}
                      placeholder='Пароль'
                      type='password'
                      style={{borderColor: errors.password && touched.password ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                    />
                  </div>
                  {errors.password && touched.password && <span className='modal-authentication__alert'>{errors.password}</span>}

                </div>
                {toShowAlert && !(errors.phoneNumber || errors.password) && <span className='modal-authentication__alert'>Введенный вами логин или пароль не верен</span>}

                <div className='modal-authentication__login-button'>
                  <PrimaryButton>Войти</PrimaryButton>
                </div>

              </form>

            <div className='modal-authentication__links'>

              <div className='modal-authentication__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalSignInWithPhone />)}>Войти с помощью смс</LinkModal>
              </div>

              <div className='modal-authentication__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalRegistration />)}>Регистрация</LinkModal>
              </div>

            </div>

            <div className='modal-authentication__login-button-for-partners'>
              <SecondaryButton onClick={() => setCurrentModal(<ModalSignInForPartner />)}>Вход для партнёров</SecondaryButton>
            </div>

          </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalSignIn;
