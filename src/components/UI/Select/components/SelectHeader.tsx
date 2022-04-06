import React, {FC, PropsWithChildren} from 'react';
import Icon from '../../Icon/Icon';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const SelectHeader: FC<PropsWithChildren<Props>> = ({onClick, children}) => {
  return (
    <div
      className="select__header"
      onClick={onClick}
    >
      {children}
      <Icon
        name="arrow-down"
        size={24}
        color="#5780EA"
      />
    </div>
  );
};

export default SelectHeader;
