import React, {FC} from 'react';

import './MarketCard.scss';
import MarketCardBadge from '../UI/MarketCardBadge/MarketCardBadge';
import ecoDollar from '../../assets/icons/eco-dollar.svg';

export interface IMarketCard {
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
}

const MarketCard: FC<IMarketCard> = ({name, category, brand, price, image}) => {
  return (
    <div className='market-card'>
      <div className='market-card__container'>
        <div className='market-card__image'>
          <img src={image} alt='product' />
          <div className='market-card__badge'>
            <MarketCardBadge>{brand}</MarketCardBadge>
          </div>
        </div>
        <div className='market-card__description'>
          <p className='market-card__name'>{name}</p>
          <p className='market-card__category'>{category}</p>
          <p className='market-card__price'>
            <img src={ecoDollar} alt='icon' />
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;