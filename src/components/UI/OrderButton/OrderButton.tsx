import {FC, PropsWithChildren} from 'react';

import './OrderButton.scss';

export interface OrderButton {
  isActive: boolean;
}

const activeClassName = 'order-button order-button_active';

const OrderButton: FC<PropsWithChildren<OrderButton>> = ({isActive, children}) => {
  return (
    <button
      className={isActive ? activeClassName : 'order-button'}
      type='button'
    >
      {children}
    </button>
  );
};

export default OrderButton;