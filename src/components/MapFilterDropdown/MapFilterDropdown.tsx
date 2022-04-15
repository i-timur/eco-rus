import React, {FC} from 'react';
import {BottomSheet} from 'react-spring-bottom-sheet';

import './MapFilterDropdown.scss';
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton/SecondaryButton';
import {useFormikContext} from 'formik';
import SelectItem from '../UI/Select/components/SelectItem';
import {materialsOptions, shopsOptions} from '../../pages/Map/Map';
import FilterCheckbox from '../UI/FilterCheckbox/FilterCheckbox';
import {customOnChange} from '../../utils/utils';

interface Props {
  isOpened: boolean;
  onDismiss: () => void;
}

const MapFilterDropdown: FC<Props> = ({isOpened, onDismiss}) => {
  const {resetForm} = useFormikContext();

  return (
    <BottomSheet
      className="map-filter-dropdown"
      open={isOpened}
      onDismiss={onDismiss}
      blocking={false}
      snapPoints={({headerHeight, maxHeight}) => [
        headerHeight,
        maxHeight - 60
      ]}
      defaultSnap={({snapPoints}) => Math.max(...snapPoints)}
      footer={
        <div className="map-filter-dropdown__control-btns">
          <div className="map-filter-dropdown__control-btn">
            <PrimaryButton size='s'>
              Применить
            </PrimaryButton>
          </div>
          <div className="map-filter-dropdown__control-btn">
            <SecondaryButton onClick={() => resetForm()} size='s'>
              Сбросить фильтры
            </SecondaryButton>
          </div>
        </div>
      }
    >
      <div className="map-filter-dropdown__container">
        <div className="map-filter-dropdown__group">
          <h6 className="map-filter-dropdown__title">Материал</h6>
          <ul className="map-filter-dropdown__list">
            {materialsOptions.map((o) => (
              <li className="map-filter-dropdown__item" key={o.value}>
                <FilterCheckbox
                  type="checkbox"
                  name="materials"
                  value={o.value}
                  onCheck={customOnChange}
                >{o.text}</FilterCheckbox>
              </li>
            ))}
          </ul>
        </div>

        <div className="map-filter-dropdown__group">
          <h6 className="map-filter-dropdown__title">Брэнд</h6>
          <ul className="map-filter-dropdown__list">
            {shopsOptions.map((o) => (
              <li className="map-filter-dropdown__item" key={o.value}>
                <FilterCheckbox
                  key={o.value}
                  name="shops"
                  value={o.value}
                  onCheck={customOnChange}
                >{o.text}</FilterCheckbox>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </BottomSheet>
  );
};

export default MapFilterDropdown;
