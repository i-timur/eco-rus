import {FC} from 'react';

import Modal from '../Modal/Modal';
import qrCode from '../../../assets/images/market/qr-code.png';
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton';
import {useStore} from '../../../index';
import './ModalQrCode.scss';

const ModalQrCode: FC = () => {
  const {modalStore: {clearCurrentModal}} = useStore();
  return (
    <Modal>
      <div className='modal-qr-code'>
        <div className='modal-qr-code__container'>

          <h2 className='modal-qr-code__title'>
            QR-код на покупку создан
          </h2>

          <p className='modal-qr-code__info'>
            При оплате покажите его сотруднику на кассе
          </p>

          <div className='modal-qr-code__image'>
            <img src={qrCode} alt='qr-code' />
          </div>

          <p className='modal-qr-code__code'>E25GHR0P</p>

          <p className='modal-qr-code__info'>
            Если не получается отсканировать QR-код, введите код вручную или продиктуйте сотриднику на кассе
          </p>

          <div className='modal-qr-code__close'>
            <PrimaryButton
              onClick={() => clearCurrentModal()}
            >
              Закрыть
            </PrimaryButton>
          </div>

        </div>
      </div>
    </Modal>
  );
};

export default ModalQrCode;
