import {FC, PropsWithChildren} from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import {customOnChange} from '../../../../utils/utils';

interface Props {
  name: string;
  value: string;
}

const SelectItem: FC<PropsWithChildren<Props>> = ({name, value, children}) => {
  return (
    <li className="select__item">
      <FilterCheckbox
        type="checkbox"
        name={name}
        value={value}
        onCheck={customOnChange}
      >{children}</FilterCheckbox>
    </li>
  );
};

export default SelectItem;
