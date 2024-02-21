import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

type Props = {
  children: React.ReactNode;
};

const AButton = ({ children }: Props) => {
  return (
    <AnchorLink className='flex items-center gap-1 underline text-primary-100 underline-offset-4 hover:cursor-pointer'>
      <span>{children}</span> <ArrowUpRightIcon className='h-4' />
    </AnchorLink>
  );
};

export default AButton;
