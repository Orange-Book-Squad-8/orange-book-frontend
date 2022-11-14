import React from 'react';
import { BaseButton } from './index';

export interface IButtonProps {
  children: React.ReactNode;
  standard?: boolean;
  otherProps?: any;
}

function Button(props: IButtonProps) {
  const { children, ...otherProps } = props;
  return <BaseButton {...otherProps}>{children}</BaseButton>;
}

export default Button;
