import React from 'react';
import { BaseButton } from './index';

interface IButtonProps {
  children: React.ReactNode;
}

function Button(props: IButtonProps) {
  const { children, ...otherProps } = props;
  return <BaseButton {...otherProps}>{children}</BaseButton>;
}

export default Button;
