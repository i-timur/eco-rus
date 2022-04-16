import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';

import MarketCard from '../../components/MarketCard/MarketCard';
import ecoDollar from '../../assets/icons/eco-dollar.svg';
import OrderButton from '../../components/UI/OrderButton/OrderButton';
import Footer from '../../components/Footer/Footer';
import FilterCheckbox from '../../components/UI/FilterCheckbox/FilterCheckbox';
import {Formik, FormikProps} from 'formik';
import {useStore} from '../../index';
import ModalQrCode from '../../components/Modals/ModalQrCode/ModalQrCode';
import {customOnChange} from '../../utils/utils';
import MarketDropdown from '../../components/MarketDropdown/MarketDropdown';
import {marketCards} from '../../utils/data';
import './Market.scss';

export type OrderType = 'popular' | 'price' | 'date';

export interface FormikValues extends Record<string, string[]> {
  sex: string[];
  type: string[];
  brand: string[];
}

const Market: FC = () => {
  const {modalStore: {setCurrentModal}} = useStore();

  const [orderType, setOrderType] = useState<OrderType>('popular');
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

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

              <li className='header-market__item'>
                <OrderButton
                  isActive={orderType === 'popular'}
                  onClick={() => setOrderType('popular')}
                >
                  По популярности
                </OrderButton>
              </li>

              <li className='header-market__item'>
                <OrderButton
                  isActive={orderType === 'price'}
                  onClick={() => setOrderType('price')}
                >
                  По цене
                </OrderButton>
              </li>

              <li className='header-market__item'>
                <OrderButton
                  isActive={orderType === 'date'}
                  onClick={() => setOrderType('date')}
                >
                  По новизне
                </OrderButton>
              </li>

            </ul>

            <button
              className="header-market__mobile-filter-button"
              onClick={() => setIsDropdownOpened(true)}
            >Фильтры</button>
          </div>
        </div>

        <div className='market__content content-market'>
          <div className='content-market__container container'>

            <div className="content-market__filter filter-market-content">
              <div className='filter-market-content__container'>

                <Formik
                  initialValues={initialValues}
                  onSubmit={() => {
                  }}
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
                                onChange={() => {
                                }}
                              >
                                Мужской
                              </FilterCheckbox>
                            </li>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='sex'
                                value='female'
                                onChange={() => {
                                }}
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
                                onCheck={customOnChange}
                              >
                                Выбрать все
                              </FilterCheckbox>
                            </li>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='type'
                                value='wear'
                                onCheck={customOnChange}
                              >
                                Одежда
                              </FilterCheckbox>
                            </li>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='type'
                                value='shoes'
                                onCheck={customOnChange}
                              >
                                Обувь
                              </FilterCheckbox>
                            </li>

                            <li className='filter-market-content__option'>
                              <FilterCheckbox
                                type='checkbox'
                                name='type'
                                value='accessories'
                                onCheck={customOnChange}
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
                                onCheck={customOnChange}
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
                                  onCheck={customOnChange}
                                >
                                  H&M
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='PB'
                                  onCheck={customOnChange}
                                >
                                  P&B
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Adidas'
                                  onCheck={customOnChange}
                                >
                                  Adidas
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Nike'
                                  onCheck={customOnChange}
                                >
                                  Nike
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Reebok'
                                  onCheck={customOnChange}
                                >
                                  Reebok
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='BOSS'
                                  onCheck={customOnChange}
                                >
                                  BOSS
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Guess'
                                  onCheck={customOnChange}
                                >
                                  Guess
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Moschino'
                                  onCheck={customOnChange}
                                >
                                  Moschino
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='DKNY'
                                  onCheck={customOnChange}
                                >
                                  DKNY
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Versace'
                                  onCheck={customOnChange}
                                >
                                  Versace
                                </FilterCheckbox>
                              </li>

                              <li className='filter-market-content__option'>
                                <FilterCheckbox
                                  type='checkbox'
                                  name='brand'
                                  value='Versus'
                                  onCheck={customOnChange}
                                >
                                  Versus
                                </FilterCheckbox>
                              </li>
                            </div>

                          </ul>
                        </div>

                      </div>

                      <MarketDropdown
                        isOpened={isDropdownOpened}
                        onDismiss={() => setIsDropdownOpened(false)}
                        order={orderType}
                        setOrder={(newOrder) => setOrderType(newOrder)}
                      />
                    </>
                  )}
                </Formik>

              </div>
            </div>

            <div className='content-market__cards'>
              <ul className='content-market__list'>

                <li className='content-market__item'>
                  <div className='content-market__first-card'>
                    <p className='content-market__balance'>
                      На вашем балансе&nbsp;
                      <img src={ecoDollar} alt='eco-dollar'/>&nbsp;
                      <span className='content-market__balance-amount'>200</span>
                    </p>
                    <p className='content-market__change'>
                      Вы можете обменять их на скидку 200 руб.
                    </p>
                    <button
                      className='content-market__button'
                      type='button'
                      onClick={() => setCurrentModal(<ModalQrCode/>)}
                    >
                      Получить промокод
                    </button>
                  </div>
                </li>


                {marketCards.map((card, i) => (
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
          <Footer/>
        </div>

      </div>
    </div>
  );
};

export default Market;
