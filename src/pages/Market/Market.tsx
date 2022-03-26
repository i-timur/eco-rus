import React, {FC, useEffect, useRef, useState} from 'react';

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
import {Field, FieldHookConfig, Form, Formik, FormikProps, useField, useFormik, useFormikContext} from 'formik';
import {BRANDS, TYPES} from '../../utils/data';
import {useStore} from '../../index';
import ModalQrCode from '../../components/Modals/ModalQrCode/ModalQrCode';
import CheckboxGroup from '../../components/CheckboxGroup/CheckboxGroup';

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

const activeInputClassNames = 'filter-market-content__option-button filter-market-content__option-button_active';
const notActiveInputClassNames = 'filter-market-content__option-button';
const activeLabelClassNames = 'filter-market-content__option-label filter-market-content__option-label_active';
const notActiveLabelClassNames = 'filter-market-content__option-label';

const selectAllTypes = (event: React.ChangeEvent<HTMLInputElement>, props: FormikProps<FormikValues>) => {
  if (props.values.type.includes('all')) {
    props.setFieldValue('type', []);
    return;
  }
  props.setFieldValue('type', TYPES);
};

const selectType =  (event: React.ChangeEvent<HTMLInputElement>, props: FormikProps<FormikValues>) => {
  props.handleChange(event);
  if (props.values.type.includes('all')) {
    const newValues = props.values.type.filter((v) => {
      if (v === 'all' || v === event.target.value) {
        return false;
      }
      return true;
    });
    props.setFieldValue('type', newValues);
  }
};

const selectAllBrands = (event: React.ChangeEvent<HTMLInputElement>, props: FormikProps<FormikValues>) => {
  if (props.values.brand.includes('all')) {
    props.setFieldValue('brand', []);
    return;
  }
  props.setFieldValue('brand', BRANDS);
};

const selectBrand =  (event: React.ChangeEvent<HTMLInputElement>, props: FormikProps<FormikValues>) => {
  props.handleChange(event);
  if (props.values.brand.includes('all')) {
    const newValues = props.values.brand.filter((v) => {
      if (v === 'all' || v === event.target.value) {
        return false;
      }
      return true;
    });
    props.setFieldValue('brand', newValues);
  }
};

const Market: FC = () => {
  const {modalStore: {setCurrentModal}} = useStore();

  const [orderType, setOrderType] = useState<OrderType>('popular');

  const initialValues: FormikValues = {
    sex: [],
    type: [],
    brand: []
  };

  const [lastToggled, setLastToggled] = useState('');

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
                              <input
                                type='checkbox'
                                value='male'
                                id='male'
                                name='sex'
                                className={props.values.sex.includes('male') ? activeInputClassNames : notActiveInputClassNames}
                                checked={props.values.sex.includes('male')}
                                onChange={props.handleChange}
                              />
                              <label
                                htmlFor='male'
                                className={props.values.sex.includes('male') ? activeLabelClassNames : notActiveLabelClassNames}
                                style={{
                                  fontWeight: props.values.sex.includes('male') ? 500 : 400
                                }}
                              >Мужской</label>
                            </li>

                            <li className='filter-market-content__option'>
                              <input
                                type='checkbox'
                                value='female'
                                id='female'
                                name='sex'
                                className={props.values.sex.includes('female') ? activeInputClassNames : notActiveInputClassNames}
                                checked={props.values.sex.includes('female')}
                                onChange={props.handleChange}
                              />
                              <label
                                htmlFor='female'
                                className={props.values.sex.includes('female') ? activeLabelClassNames : notActiveLabelClassNames}
                                style={{
                                  fontWeight: props.values.sex.includes('female') ? 500 : 400
                                }}
                              >Женский</label>
                            </li>

                          </ul>
                        </div>

                        <div className='filter-market-content__menu-item'>
                          <h4 className='filter-market-content__menu-title'>Тип товара</h4>
                          <ul className='filter-market-content__options'>

                            <li className='filter-market-content__option'>
                              <input
                                type='checkbox'
                                value='all'
                                id='type-all'
                                name='type'
                                className={props.values.type.includes('all') ? activeInputClassNames : notActiveInputClassNames}
                                checked={props.values.type.includes('all')}
                                onChange={(e) => selectAllTypes(e, props)}
                              />
                              <label
                                htmlFor='type-all'
                                className={props.values.type.includes('all') ? activeLabelClassNames : notActiveLabelClassNames}
                                style={{
                                  fontWeight: props.values.type.includes('all') ? 500 : 400
                                }}
                              >Выбрать все</label>
                            </li>

                            <li className='filter-market-content__option'>
                              <input
                                type='checkbox'
                                value='wear'
                                id='wear'
                                name='type'
                                className={props.values.type.includes('wear') ? activeInputClassNames : notActiveInputClassNames}
                                checked={props.values.type.includes('wear')}
                                onChange={(e) => selectType(e, props)}
                              />
                              <label
                                htmlFor='wear'
                                className={props.values.type.includes('wear') ? activeLabelClassNames : notActiveLabelClassNames}
                                style={{
                                  fontWeight: props.values.type.includes('wear') ? 500 : 400
                                }}
                              >Одежда</label>
                            </li>

                            <li className='filter-market-content__option'>
                              <input
                                type='checkbox'
                                value='shoes'
                                id='shoes'
                                name='type'
                                className={props.values.type.includes('shoes') ? activeInputClassNames : notActiveInputClassNames}
                                checked={props.values.type.includes('shoes')}
                                onChange={(e) => selectType(e, props)}
                              />
                              <label
                                htmlFor='shoes'
                                className={props.values.type.includes('shoes') ? activeLabelClassNames : notActiveLabelClassNames}
                                style={{
                                  fontWeight: props.values.type.includes('shoes') ? 500 : 400
                                }}
                              >Обувь</label>
                            </li>

                            <li className='filter-market-content__option'>
                              <input
                                type='checkbox'
                                value='accessories'
                                id='accessories'
                                name='type'
                                className={props.values.type.includes('accessories') ? activeInputClassNames : notActiveInputClassNames}
                                checked={props.values.type.includes('accessories')}
                                onChange={(e) => selectType(e, props)}
                              />
                              <label
                                htmlFor='accessories'
                                className={props.values.type.includes('accessories') ? activeLabelClassNames : notActiveLabelClassNames}
                                style={{
                                  fontWeight: props.values.type.includes('accessories') ? 500 : 400
                                }}
                              >Аксессуары</label>
                            </li>

                          </ul>
                        </div>

                        <div className='filter-market-content__menu-item'>
                          <h4 className='filter-market-content__menu-title'>Брэнд</h4>
                          <ul className='filter-market-content__options'>

                            <li className='filter-market-content__option'>
                              <input
                                type='checkbox'
                                value='all'
                                id='brand-all'
                                name='brand'
                                className={props.values.brand.includes('all') ? activeInputClassNames : notActiveInputClassNames}
                                checked={props.values.brand.includes('all')}
                                onChange={(e) => selectAllBrands(e, props)}
                              />
                              <label
                                htmlFor='brand-all'
                                className={props.values.brand.includes('all') ? activeLabelClassNames : notActiveLabelClassNames}
                                style={{
                                  fontWeight: props.values.brand.includes('all') ? 500 : 400
                                }}
                              >Выбрать все</label>
                            </li>

                            <div className='filter-market-content__scrollable-checkboxes'>
                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='HM'
                                  id='HM'
                                  name='brand'
                                  className={props.values.brand.includes('HM') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('HM')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='HM'
                                  className={props.values.brand.includes('HM') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('HM') ? 500 : 400
                                  }}
                                >H&M</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='PB'
                                  id='PB'
                                  name='brand'
                                  className={props.values.brand.includes('PB') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('PB')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='PB'
                                  className={props.values.brand.includes('PB') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('PB') ? 500 : 400
                                  }}
                                >P&B</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='Adidas'
                                  id='Adidas'
                                  name='brand'
                                  className={props.values.brand.includes('Adidas') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('Adidas')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='Adidas'
                                  className={props.values.brand.includes('Adidas') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('Adidas') ? 500 : 400
                                  }}
                                >Adidas</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='Nike'
                                  id='Nike'
                                  name='brand'
                                  className={props.values.brand.includes('Nike') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('Nike')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='Nike'
                                  className={props.values.brand.includes('Nike') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('Nike') ? 500 : 400
                                  }}
                                >Nike</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='Reebok'
                                  id='Reebok'
                                  name='brand'
                                  className={props.values.brand.includes('Reebok') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('Reebok')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='Reebok'
                                  className={props.values.brand.includes('Reebok') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('Reebok') ? 500 : 400
                                  }}
                                >Reebok</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='BOSS'
                                  id='BOSS'
                                  name='brand'
                                  className={props.values.brand.includes('BOSS') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('BOSS')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='BOSS'
                                  className={props.values.brand.includes('BOSS') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('BOSS') ? 500 : 400
                                  }}
                                >BOSS</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='Guess'
                                  id='Guess'
                                  name='brand'
                                  className={props.values.brand.includes('Guess') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('Guess')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='Guess'
                                  className={props.values.brand.includes('Guess') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('Guess') ? 500 : 400
                                  }}
                                >Guess</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='Moschino'
                                  id='Moschino'
                                  name='brand'
                                  className={props.values.brand.includes('Moschino') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('Moschino')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='Moschino'
                                  className={props.values.brand.includes('Moschino') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('Moschino') ? 500 : 400
                                  }}
                                >Moschino</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='DKNY'
                                  id='DKNY'
                                  name='brand'
                                  className={props.values.brand.includes('DKNY') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('DKNY')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='DKNY'
                                  className={props.values.brand.includes('DKNY') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('DKNY') ? 500 : 400
                                  }}
                                >DKNY</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='Versace'
                                  id='Versace'
                                  name='brand'
                                  className={props.values.brand.includes('Versace') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('Versace')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='Versace'
                                  className={props.values.brand.includes('Versace') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('Versace') ? 500 : 400
                                  }}
                                >Versace</label>
                              </li>

                              <li className='filter-market-content__option'>
                                <input
                                  type='checkbox'
                                  value='Versus'
                                  id='Versus'
                                  name='brand'
                                  className={props.values.brand.includes('Versus') ? activeInputClassNames : notActiveInputClassNames}
                                  checked={props.values.brand.includes('Versus')}
                                  onChange={(e) => selectBrand(e, props)}
                                />
                                <label
                                  htmlFor='Versus'
                                  className={props.values.brand.includes('Versus') ? activeLabelClassNames : notActiveInputClassNames}
                                  style={{
                                    fontWeight: props.values.brand.includes('Versus') ? 500 : 400
                                  }}
                                >Versus</label>
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
