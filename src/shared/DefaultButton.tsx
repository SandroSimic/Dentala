import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: React.ReactNode;
};

const DefaultButton = ({ children }: Props) => {
  return (
    <AnchorLink className='shadow-md shadow-primary-100 text-white transition-colors duration-300 bg-primary-100 py-5 px-10 rounded-2xl hover:cursor-pointer hover:bg-primary-500'>
      <span>{children}</span>
    </AnchorLink>
  );
};

export default DefaultButton;
