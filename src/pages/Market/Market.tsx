import React, {FC, useState} from 'react';

import './Market.scss';
import MarketCard, {IMarketCard} from '../../components/MarketCard/MarketCard';
import ecoDollar from '../../assets/icons/eco-dollar.svg';
import image1 from '../../assets/images/market/image1.png';
import image2 from '../../assets/images/market/image2.png';
import image3 from '../../assets/images/market/image3.png';
import image4 from '../../assets/images/market/image4.png';
import image5 from '../../assets/images/market/image5.png';
import OrderButton from '../../components/UI/OrderButton/OrderButton';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom';
import FilterCheckbox from '../../components/UI/FilterCheckbox/FilterCheckbox';
import {Formik, FormikProps} from 'formik';
import {useStore} from '../../index';
import ModalQrCode from '../../components/Modals/ModalQrCode/ModalQrCode';

type OrderType = 'popular' | 'price' | 'date';

export interface FormikValues extends Record<string, string[]> {
  sex: string[];
  type: string[];
  brand: string[];
}

const cards: IMarketCard[] = [
  {
  name: 'Nike Air Max 2021',
    category: 'Мужская обувь',
    brand: 'NIKE',
    price: 1000,
    image: image1
  },
  {
    name: 'Nike Air Max 90 Premium',
    category: 'Мужская обувь',
    brand: 'NIKE',
    price: 750,
    image: image2
  },
  {
    name: 'Adidas Alphabounce RC',
    category: 'Мужская обувь',
    brand: 'Adidas',
    price: 1200,
    image: image3
  },
  {
    name: 'Nike Air Max 2021',
    category: 'Мужская обувь',
    brand: 'H&M',
    price: 1000,
    image: image4
  },
  {
    name: 'Nike Air Force 1 Low',
    category: 'Мужская обувь',
    brand: 'NIKE',
    price: 2100,
    image: image5
  },
];

const Market: FC = () => {
  const {modalStore: {setCurrentModal}} = useStore();

  const [orderType, setOrderType] = useState<OrderType>('popular');

  const initialValues: FormikValues = {
    sex: [],
    type: [],
    brand: []
  };

  return (
    <div className='market'>
      <div className='market__container'>

        <div className='market__header header-market'>
          <div className='header-market__container container'>
            <h1 className='header-market__title'>ЭкоМаркет</h1>

            <ul className='header-market__list'>

              <li
                className='header-market__item'
                onClick={() => setOrderType('popular')}
              >
                <OrderButton isActive={orderType === 'popular'}>
                  По популярности
                </OrderButton>
              </li>

              <li
                className='header-market__item'
                onClick={() => setOrderType('price')}
              >
                <OrderButton isActive={orderType === 'price'}>
                  По цене
                </OrderButton>
              </li>

              <li
                className='header-market__item'
                onClick={() => setOrderType('date')}
              >
                <OrderButton isActive={orderType === 'date'}>
                  По новизне
                </OrderButton>
              </li>

            </ul>
          </div>
        </div>

        <div className='market__content content-market'>
          <div className='content-market__container container'>

            <div className='content-market__filter filter-market-content'>
              <div className='filter-market-content__container'>

                <Formik
                  initialValues={initialValues}
                  onSubmit={() => {}}
                >
                  {(props: FormikProps<FormikValues>) => (
                    <>
                      <div className='filter-market-content__menu'>

                        <div className='filter-market-content__menu-item'>
                          <h4 className='filter-market-content__menu-title'>Пол</h4>

                            <ul className='filter-market-content__options'>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='sex'
                                  value='male'
                                >
                                  Мужской
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='sex'
                                  value='female'
                                >
                                  Женский
                                </FilterCheckbox>
                              </li>

                            </ul>

                        </div>

                        <div className='filter-market-content__menu-item'>
                          <h4 className='filter-market-content__menu-title'>Тип товара</h4>
                          <ul className='filter-market-content__options'>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='type'
                                value='all'
                                >
                                  Выбрать все
                              </FilterCheckbox>
                            </li>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='type'
                                value='wear'
                              >
                                Одежда
                              </FilterCheckbox>
                            </li>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='type'
                                value='shoes'
                              >
                                Обувь
                              </FilterCheckbox>
                            </li>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='type'
                                value='accessories'
                              >
                                Аксессуары
                              </FilterCheckbox>
                            </li>

                          </ul>
                        </div>

                        <div className='filter-market-content__menu-item'>
                          <h4 className='filter-market-content__menu-title'>Брэнд</h4>
                          <ul className='filter-market-content__options'>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='brand'
                                value='all'
                              >
                                Выбрать все
                              </FilterCheckbox>
                            </li>

                            <div className='filter-market-content__scrollable-checkboxes'>
                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='HM'
                                >
                                  H&M
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='PB'
                                >
                                  P&B
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Adidas'
                                >
                                  Adidas
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Nike'
                                >
                                  Nike
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Reebok'
                                >
                                  Reebok
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='BOSS'
                                >
                                  BOSS
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Guess'
                                >
                                  Guess
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Moschino'
                                >
                                  Moschino
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='DKNY'
                                >
                                  DKNY
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Versace'
                                >
                                  Versace
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Versus'
                                >
                                  Versus
                                </FilterCheckbox>
                              </li>
                            </div>

                          </ul>
                        </div>

                      </div>

                      <div className='filter-market-content__button-wrapper'>
                        <button
                          type='button'
                          className='filter-market-content__button'
                          onClick={props.handleReset}
                        >
                          Сбросить фильтры
                        </button>
                      </div>
                    </>
                  )}
                </Formik>

                <form id='filter'>

                </form>

              </div>
            </div>

            <div className='content-market__cards'>
              <ul className='content-market__list'>

                <li className='content-market__item'>
                  <div className='content-market__first-card'>
                    <p className='content-market__balance'>
                      На вашем балансе&nbsp;
                      <img src={ecoDollar} alt='eco-dollar' />&nbsp;
                      <span className='content-market__balance-amount'>200</span>
                    </p>
                    <p className='content-market__change'>
                      Вы можете обменять их на скидку 200 руб.
                    </p>
                    <button
                      className='content-market__button'
                      type='button'
                      onClick={() => setCurrentModal(<ModalQrCode />)}
                    >
                      Получить промокод
                    </button>
                  </div>
                </li>

                {cards.map((card, i) => (
                  <li
                    className='content-market__item'
                    key={i}
                  >
                    <div className='content-market__card'>
                      <Link to='#'>
                        <MarketCard
                          name={card.name}
                          category={card.category}
                          brand={card.brand}
                          price={card.price}
                          image={card.image}
                        />
                      </Link>
                    </div>
                  </li>
                ))}

              </ul>
            </div>

          </div>
        </div>

        <div className='market__footer'>
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default Market;
