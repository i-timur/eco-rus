import React, {FC, useEffect, useState} from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className='market-card'>
      <div className='market-card__container'>
        {isLoading ? (
          <Skeleton className="market-card-skeleton__image" />
        ) : (
          <div className='market-card__image'>
            <img src={image} alt='product'/>
            <div className='market-card__badge'>
              <MarketCardBadge>{brand}</MarketCardBadge>
            </div>
          </div>
        )}

        <div className='market-card__description'>
          <p className='market-card__name'>{isLoading ? <Skeleton className="market-card-skeleton__name" /> : name}</p>
          <p className='market-card__category'>{isLoading ? <Skeleton className="market-card-skeleton__category" /> : category}</p>
          <p className='market-card__price'>

            {isLoading ? <Skeleton containerClassName="market-card-skeleton__price" /> : (
              <>
                <img src={ecoDollar} alt='icon'/>
                {price}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
