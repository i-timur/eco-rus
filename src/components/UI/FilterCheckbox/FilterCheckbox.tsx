import React, {ChangeEvent} from 'react';

import './FilterCheckbox.scss';
import {FieldHookConfig, useField, useFormikContext} from 'formik';
import {FormikValues} from '../../../pages/Market/Market';
import {BRANDS, TYPES} from '../../../utils/data';

const checkedInputClassNames = 'filter-checkbox__input filter-checkbox__input_checked';
const notCheckedInputClassNames = 'filter-checkbox__input';
const checkedLabelClassNames = 'filter-checkbox__label filter-checkbox__label_checked';
const notCheckedLabelClassNames = 'filter-checkbox__label';

const FilterCheckbox= ({children, ...props}: FieldHookConfig<string>) => {
  const [field] = useField({...props, type:'checkbox'});

  const {values, setFieldValue} = useFormikContext<FormikValues>();


  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (field.value === 'all') {
      if (values[field.name].includes('all')) {
        setFieldValue(field.name, []);
        return;
      }

      switch (field.name) {
        case 'type':
          setFieldValue(field.name, TYPES);
          return;
        case 'brand':
          setFieldValue(field.name, BRANDS);
          return;
      }
    } else {
      if (values[field.name].includes('all') && field.checked) {
        const newValues = values[field.name]
          .filter((v) => {
            if (v === 'all' || v === field.value) return false;
            return true;
          });
        setFieldValue(field.name, newValues);
      } else {
        if (field.checked) {
          const newValues = values[field.name]
            .filter((v) => v !== e.target.value);
          setFieldValue(field.name, newValues);
        } else {
          const newValues = [...values[field.name], e.target.value];
          setFieldValue(field.name, newValues);
        }
      }
    }
  };

  return (
    <div className='filter-checkbox'>
      <label
        className={field.checked ? checkedLabelClassNames : notCheckedLabelClassNames}
        style={{
          fontWeight: field.checked ? 500 : 400
        }}
      >
        <input
          type='checkbox'
          className={field.checked ? checkedInputClassNames : notCheckedInputClassNames}
          {...field}
          onChange={(e) => onCheck(e)}
        />
        {children}
      </label>
    </div>
)};

export default FilterCheckbox;
