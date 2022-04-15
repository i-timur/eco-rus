import React, {FC, useEffect, useState} from 'react';
import {BottomSheet} from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css'

import OrderButton from '../UI/OrderButton/OrderButton';
import {OrderType} from '../../pages/Market/Market';
import './MarketDropdown.scss';
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton/SecondaryButton';
import FilterCheckbox from '../UI/FilterCheckbox/FilterCheckbox';
import {customOnChange} from '../../utils/utils';
import {useFormikContext} from 'formik';

interface Props {
  isOpened: boolean;
  onDismiss: () => void;
  order: string;
  setOrder: (newOrder: OrderType) => void;
}

const MarketDropdown: FC<Props> = ({isOpened, onDismiss, order, setOrder}) => {
  const {resetForm} = useFormikContext();

  return (
        <BottomSheet
          className="market-dropdown"
          open={isOpened}
          blocking={false}
          scrollLocking={false}
          snapPoints={({headerHeight, maxHeight}) => [
            headerHeight,
            maxHeight - 60
          ]}
          onDismiss={onDismiss}
          defaultSnap={({snapPoints}) => Math.max(...snapPoints)}
          footer={
            <div className="market-dropdown__control-btns">
              <div className="market-dropdown__control-btn">
                <PrimaryButton size='s'>
                  Применить
                </PrimaryButton>
              </div>
              <div className="market-dropdown__control-btn">
                <SecondaryButton onClick={() => resetForm()} size='s'>
                  Сбросить фильтры
                </SecondaryButton>
              </div>
            </div>
          }
        >
          <div className="market-dropdown__container">
            <div className="market-dropdown__order-btns">
              <div className="market-dropdown__order-btn">
                <OrderButton
                  isActive={order === 'popular'}
                  onClick={() => setOrder('popular')}
                >
                  По популярности
                </OrderButton>
              </div>

              <div className="market-dropdown__order-btn">
                <OrderButton
                  isActive={order === 'price'}
                  onClick={() => setOrder('price')}
                >
                  По цене
                </OrderButton>
              </div>

              <div className="market-dropdown__order-btn">
                <OrderButton
                  isActive={order === 'date'}
                  onClick={() => setOrder('date')}
                >
                  По новизне
                </OrderButton>
              </div>
            </div>

            <div className="market-dropdown__filters">
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
          </div>
        </BottomSheet>
  );
};

export default MarketDropdown;
