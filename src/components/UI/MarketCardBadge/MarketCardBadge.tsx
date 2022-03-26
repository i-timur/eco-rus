import React, {FC} from 'react';

import './MarketCardBadge.scss';

const MarketCardBadge: FC = ({children}) => {
  return (
    <div className='market-card-badge'>
      {children}
    </div>
  );
};

export default MarketCardBadge;