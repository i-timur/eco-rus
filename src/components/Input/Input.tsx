import React, {CSSProperties} from 'react';

import './Input.scss';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  style?: CSSProperties;
}

const Input: React.FC<Props> = ({value, onChange, placeholder, type, style}) => {
  return (
    <div className='utility-input-container'>
      <input
        className='utility-input-container__input'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        style={style}
      />
    </div>
  );
};

export default Input;