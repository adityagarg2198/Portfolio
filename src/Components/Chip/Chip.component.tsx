import { FC } from 'react';
import './Chip.css';

const Chip: FC<{ text: string }> = ({ text }) => {
  return <div className='chip'>{text}</div>;
};

export default Chip;
