import {FC, PropsWithChildren} from 'react';

import './OrderButton.scss';

export interface OrderButton {
  isActive: boolean;
  onClick: () => void;
}

const activeClassName = 'order-button order-button_active';

const OrderButton: FC<PropsWithChildren<OrderButton>> = ({isActive, onClick, children}) => {
  return (
    <button
      type='button'
      className={isActive ? activeClassName : 'order-button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OrderButton;
