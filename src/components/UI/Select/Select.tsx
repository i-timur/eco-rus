import {FC} from 'react';

import './Select.scss';

const Select: FC = ({children}) => {

  return (
    <div className="select">
      <div className="select__container">
        {children}
      </div>
    </div>
  );
};

export default Select;
