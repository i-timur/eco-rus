import {FC, PropsWithChildren} from 'react';

interface Props {
  isOpen: boolean;
}

const SelectList: FC<PropsWithChildren<Props>> = ({children, isOpen}) => {
  return isOpen ? (
    <ul className="select__list">
      {children}
    </ul>
  ) : null;
};

export default SelectList;
