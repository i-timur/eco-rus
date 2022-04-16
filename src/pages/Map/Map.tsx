import {FC, useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Formik, FormikProps} from 'formik';

import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Select from '../../components/UI/Select/Select';
import MapComponent from '../../components/MapComponent/MapComponent';
import SelectHeader from '../../components/UI/Select/components/SelectHeader';
import SelectList from '../../components/UI/Select/components/SelectList';
import SelectItem from '../../components/UI/Select/components/SelectItem';
import Icon from '../../components/UI/Icon/Icon';
import MapCardsDropdown from '../../components/MapCardsDropdown/MapCardsDropdown';
import MapFilterDropdown from '../../components/MapFilterDropdown/MapFilterDropdown';
import {materialsOptions, shopsOptions} from '../../utils/data';
import './Map.scss';

interface FormikValues {
  shops: string[];
  materials: string[];
}

const Map: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isShopsDropDownOpen, setIsShopsDropDownOpen] = useState(false);
  const [isMaterialsDropDownOpen, setIsMaterialsDropDownOpen] = useState(false);
  const [isCardsDropdownOpened, setIsCardsDropdownOpened] = useState(true);
  const [isFilterDropdownOpened, setIsFilterDropdownOpened] = useState(false);

  const openFilerDropdown = () => {
    setIsCardsDropdownOpened(false);
    setIsFilterDropdownOpened(true);
  };


  const onShopsHeaderClick = () => {
    if (isShopsDropDownOpen) {
      setIsShopsDropDownOpen(false);
      return;
    }
    if (isMaterialsDropDownOpen) {
      setIsMaterialsDropDownOpen(false);
    }
    setIsShopsDropDownOpen(true);
  };

  const onMaterialsHeaderClick = () => {
    if (isMaterialsDropDownOpen) {
      setIsMaterialsDropDownOpen(false);
      return;
    }
    if (isShopsDropDownOpen) {
      setIsShopsDropDownOpen(false);
    }
    setIsMaterialsDropDownOpen(true);
  };

  const shopSelectHeaderText = (props: FormikProps<FormikValues>) => {
    if (!props.touched.shops) {
      return <span className="controls-map__select-placeholder">Магазины</span>
    } else {
      return `Выбрано ${props.values.shops.includes('all') ? props.values.shops.length - 1
        : props.values.shops.length} магазина`
    }
  };


  const materialsSelectHeaderText = (props: FormikProps<FormikValues>) => {
    if (!props.touched.materials) {
      return <span className="controls-map__select-placeholder">Материалы</span>
    } else {
      return `Выбрано ${props.values.materials.includes('all') ? props.values.materials.length - 1
        : props.values.materials.length} материала`
    }
  };

  const onFilterDropdownDismiss = () => {
    setIsFilterDropdownOpened(false);
    setIsCardsDropdownOpened(true);
  };

  const initialValues: FormikValues = {
    shops: [],
    materials: []
  };

  return (
    <div className="map">
      <div className="map__container">

        <div className="map__map-component">
          <MapComponent/>
        </div>

        <div className="map__controls controls-map">
          <div className="controls-map__container container">
            <div className="controls-map__search-bar">
              <SearchBar
                searchTerm={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              className="controls-map__mobile-filter-settings"
              onClick={openFilerDropdown}
            >
              <Icon
                name="filter"
                color="rgba(0, 11, 38, 0.72)"
              />
            </button>

            <Formik
              initialValues={initialValues}
              onSubmit={() => {
              }}
            >
              {(props) => (
                <>
                  <div className="controls-map__select">
                    <Select>
                      <SelectHeader
                        isOpen={isShopsDropDownOpen}
                        onClick={onShopsHeaderClick}
                      >
                        {shopSelectHeaderText(props)}
                      </SelectHeader>
                      <SelectList isOpen={isShopsDropDownOpen}>
                        {shopsOptions.map((o) => (
                          <SelectItem
                            key={o.value}
                            name="shops"
                            value={o.value}
                          >{o.text}</SelectItem>
                        ))}
                      </SelectList>
                    </Select>
                  </div>


                  <div className="controls-map__select">
                    <Select>
                      <SelectHeader
                        isOpen={isMaterialsDropDownOpen}
                        onClick={onMaterialsHeaderClick}
                      >
                        {materialsSelectHeaderText(props)}
                      </SelectHeader>
                      <SelectList isOpen={isMaterialsDropDownOpen}>
                        {materialsOptions.map((o) => (
                          <SelectItem
                            key={o.value}
                            name="materials"
                            value={o.value}
                          >{o.text}</SelectItem>
                        ))}
                      </SelectList>
                    </Select>
                  </div>

                  <MapFilterDropdown
                    isOpened={isFilterDropdownOpened}
                    onDismiss={onFilterDropdownDismiss}
                  />
                </>
              )}
            </Formik>
          </div>
        </div>

        <MapCardsDropdown
          isOpened={isCardsDropdownOpened}
          onDismiss={() => setIsCardsDropdownOpened(false)}
        />

        <div className="map__cards cards-map">
          <div className="cards-map__container">

            <Outlet/>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Map;
