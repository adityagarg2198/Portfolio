import { FC } from 'react';
import './ContentWrapper.css';

const ContentWrapper: FC<{
  children: JSX.Element;
}> = ({ children }) => {
  return <div className='content-wrapper'>{children}</div>;
};

export default ContentWrapper;
