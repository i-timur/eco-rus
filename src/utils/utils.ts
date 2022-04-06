import {BRANDS, MATERIALS, SHOPS, TYPES} from './data';
import {ChangeEvent} from 'react';

export const getSlideBackgroundColor = (slideIndex: number) => {
  switch (slideIndex) {
    case 0:
      return 'bg-green';
    case 1:
      return 'bg-orange';
    case 2:
      return 'bg-mint';
    default:
      return '';
  }
};

export const PHONE_NUMBER_REGEXP = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g

export const getAllGroup = (name: string) => {
  switch (name) {
    case 'type': return TYPES;
    case 'brand': return BRANDS;
    case 'shops': return SHOPS
    case 'materials': return MATERIALS;
    default: return [];
  }
};

export const customOnChange =
  (
    e: ChangeEvent<HTMLInputElement>,
    name: string,
    values: string[],
    setFieldValues: (field: string, value: string[]) => void
  ) => {
    let newValues: string[] = [];
    if (e.target.value === 'all') {
      if (!values.includes('all')) {
        newValues = getAllGroup(name);
      }
    } else {
      if (values.includes(e.target.value)) {
        if (values.includes('all')) {
          newValues = values.filter((v) => v !== 'all' && v !== e.target.value);
        } else {
          newValues = values.filter((v) => v !== e.target.value);
        }
      } else {
        newValues = [...values, e.target.value];
      }
    }
    setFieldValues(name, newValues);
  };
