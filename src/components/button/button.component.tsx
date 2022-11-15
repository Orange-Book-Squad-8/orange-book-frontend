import React from 'react';
import { BaseButton } from './index';

export interface IButtonProps {
  children: React.ReactNode;
  standard?: boolean;
  otherProps?: any;
  onClick?: () => void;
}

function Button(props: IButtonProps) {
  const { children, ...otherProps } = props;
  return <BaseButton {...otherProps} onClick={props?.onClick}>{children}</BaseButton>;
}

export default Button;
