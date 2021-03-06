import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import './ModalSignUpForPartner.scss';
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
  companyName: string;
  email: string;
  password: string
}

const SignUpSchema = Yup.object().shape({
  companyName: Yup.string().required(),
  email: Yup.string()
    .email()
    .required('Email is required'),
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
     phone_number: values.email,
     password: values.password,
     username: values.companyName
   })
     //@ts-ignore
     .then(signUpSuccess, signUpFailure)
  };

  const formik = useFormik({
    initialValues: {
      companyName: '',
      email: '',
      password: ''
    },
    validationSchema: SignUpSchema,
    onSubmit: (values: FormValues) => signUp(values)
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

  return (
    <Modal>
      <div className='modal-sign-up-for-partner'>
        <div className='modal-sign-up-for-partner__container'>

          <div className='modal-sign-up-for-partner__header'>
            <h2 className='modal-sign-up-for-partner__title'>??????????????????????</h2>
            <button
              className='modal-sign-up-for-partner__close'
              type='button'
              onClick={() => clearCurrentModal()}
            ><Icon name='close' color='rgba(0, 11, 38, 0.72)' size={32} /></button>
          </div>

          <div className='modal-sign-up-for-partner__body'>

            <form onSubmit={handleSubmit}>

              <div className='modal-sign-up-for-partner__inputs'>

                <div className='modal-sign-up-for-partner__input'>
                  <Input
                    id='companyName'
                    name='companyName'
                    value={values.companyName}
                    onChange={handleChange}
                    placeholder='???????????????????????? ??????????????????????'
                    type='text'
                    style={{borderColor: errors.companyName && touched.companyName ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                  />
                </div>
                {errors.companyName && touched.companyName && <span className='modal-sign-up-for-partner__alert'>{errors.companyName}</span>}

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

                <div className='modal-sign-up-for-partner__input'>
                  <Input
                    id='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder='????????????'
                    type='password'
                    style={{borderColor: errors.password && touched.password ? '#FF4545' : 'rgba(0, 11, 38, 0.16)'}}
                  />
                </div>
                {errors.password && touched.password && <span className='modal-sign-up-for-partner__alert'>{errors.password}</span>}

              </div>
              {toShowAlert && !(errors.companyName || errors.email || errors.password) && <span className='modal-sign-up-for-partner__alert'>?????????????????? ???????? email ?????? ????????????????????????</span>}


              <div className='modal-sign-up-for-partner__login-button'>
                <PrimaryButton>??????????</PrimaryButton>
              </div>

            </form>

            <div className='modal-sign-up-for-partner__links'>

              <div className='modal-sign-up-for-partner__link'>
                <LinkModal onClick={() => setCurrentModal(<ModalSignInForPartner />)}>?? ?????? ????????????????????????????????(-??????)</LinkModal>
              </div>

            </div>

            <div className='modal-sign-up-for-partner__login-button-for-partners'>
              <SecondaryButton onClick={() => setCurrentModal(<ModalSignInForPartner />)}>???????? ?????? ??????????????????</SecondaryButton>
            </div>

          </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalSignUpForPartner;
