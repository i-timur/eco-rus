import {ChangeEvent, FC} from 'react';

import './SearchBar.scss';
import Icon from '../Icon/Icon';

interface Props {
  searchTerm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<Props> = ({searchTerm, onChange}) => {
  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <Icon name="search" color="rgba(0, 11, 38, 0.48)"/>
        <input
          type="text"
          className="search-bar__input"
          value={searchTerm}
          onChange={(e) => onChange(e)}
          placeholder="Поиск"
        />
      </div>
    </div>
  );
};

export default SearchBar;
