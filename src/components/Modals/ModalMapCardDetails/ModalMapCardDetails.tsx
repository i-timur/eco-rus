import {FC} from 'react';
import Modal from '../Modal/Modal';
import {Link} from 'react-router-dom';

import Icon from '../../UI/Icon/Icon';
import Containers from '../../../assets/images/map/containers-mobile.png';
import './ModalMapCardDetails.scss';
import {useStore} from '../../../index';
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton';

const ModalMapCardDetails: FC = () => {
  const {modalStore: {clearCurrentModal}} = useStore();
  return (
    <Modal>
      <div className="modal-map-card-details">
        <div className="modal-map-card-details__container">
          <Link
            to="/map"
            className="modal-map-card-details__link"
            onClick={() => clearCurrentModal()}
          >
            <Icon
              name="arrow-left"
              color="#5780EA"
            />
            Вернуться назад
          </Link>

          <div className="modal-map-card-details__image">
            <img src={Containers} alt="containers" />
          </div>

          <div className="modal-map-card-details__text">
            <p className="modal-map-card-details__address">Казань, Кремлёвская, 88</p>
            <p className="modal-map-card-details__phone-number">+7 (917) 888 88 88</p>
            <div className="modal-map-card-details__schedule schedule">
              <div className="schedule__item">
                <p className="schedule__weekday">Пн - Пт</p>
                <p className="schedule__time">08:00 - 20:00</p>
              </div>
              <div className="schedule__item">
                <p className="schedule__weekday">Сб - Вс</p>
                <p className="schedule__time">10:00 - 18:00</p>
              </div>
            </div>
            <div className="modal-map-card-details__requirements">
              <div className="modal-map-card-details__requirement requirement">
                <h6 className="requirement__title">H&M</h6>
                <div className="requirement__badges">
                  <div className="requirement__badge">
                    Пластик: от 5 кг
                  </div>
                  <div className="requirement__badge">
                    Стекло: от 2 кг
                  </div>
                  <div className="requirement__badge">
                    Бумага: от 10 кг
                  </div>
                  <div className="requirement__badge">
                    Батареи: от 2 кг
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-map-card-details__requirement requirement">
              <h6 className="requirement__title">Adidas</h6>
              <div className="requirement__badges">
                <div className="requirement__badge">
                  Пластик: от 5 кг
                </div>
                <div className="requirement__badge">
                  Стекло: от 2 кг
                </div>
                <div className="requirement__badge">
                  Бумага: от 10 кг
                </div>
              </div>
            </div>
          </div>

          <div className="modal-map-card-details__btn">
            <PrimaryButton onClick={() => clearCurrentModal()}>
              Закрыть
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMapCardDetails;
