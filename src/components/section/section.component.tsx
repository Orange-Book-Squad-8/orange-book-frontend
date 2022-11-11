import React from 'react';
import { SectionContainer, Title } from './index';

interface ISectionProps {
  children: React.ReactNode;
  title: string;
  titleTag?: React.ElementType;
}

function Section(props: ISectionProps) {
  const { children, title, titleTag = 'h2', ...otherProps } = props;

  return (
    <SectionContainer as={title ? 'section' : 'div'} {...otherProps}>
      {title && <Title as={titleTag}>{title}</Title>}

      {children}
    </SectionContainer>
  );
}

export default Section;
