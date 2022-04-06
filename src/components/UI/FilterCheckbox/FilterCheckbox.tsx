import React, {ChangeEvent} from 'react';

import './FilterCheckbox.scss';
import {FieldHookConfig, useField, useFormikContext} from 'formik';
import {FormikValues} from '../../../pages/Market/Market';

const checkedInputClassNames = 'filter-checkbox__input filter-checkbox__input_checked';
const notCheckedInputClassNames = 'filter-checkbox__input';
const checkedLabelClassNames = 'filter-checkbox__label filter-checkbox__label_checked';
const notCheckedLabelClassNames = 'filter-checkbox__label';

interface Props {
  onCheck?: (
    e: ChangeEvent<HTMLInputElement>,
    name: string,
    values: string[],
    setFieldValues: (field: string, value: string[]) => void
  ) => void;
}

const FilterCheckbox= ({onCheck, children, ...props}: FieldHookConfig<string> & Props ) => {
  const [field] = useField({...props, type:'checkbox'});

  const {values, setFieldValue, setFieldTouched} = useFormikContext<FormikValues>();

  const myOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldTouched(field.name, true);
    if (onCheck) {
      onCheck(e, field.name, values[field.name], setFieldValue);
    } else {
      field.onChange(e);
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
          onChange={(e) => myOnChange(e)}
        />
        {children}
      </label>
    </div>
)};

export default FilterCheckbox;
